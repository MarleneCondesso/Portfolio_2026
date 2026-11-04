import type { NextApiRequest, NextApiResponse } from "next";
import { featuredProjects } from "@/libs/portfolioData";

type ProjectHealth = {
  reachable: boolean;
  statusCode: number | null;
  checkedAt: string;
};

type HealthResponse = Record<string, ProjectHealth>;

const MONITORED_PROJECT_IDS = new Set([
  "family-show-tv",
  "wedding-planner",
  "limoncello-logic",
  "homebase",
  "domus-unify",
]);

async function checkWebsite(url: string): Promise<Omit<ProjectHealth, "checkedAt">> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
      headers: { "user-agent": "PortfolioProjectHealth/1.0" },
    });

    // Some hosting providers do not support HEAD requests.
    if (response.status >= 400) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        cache: "no-store",
        signal: controller.signal,
        headers: {
          "user-agent": "PortfolioProjectHealth/1.0",
          range: "bytes=0-0",
        },
      });
    }

    return {
      reachable: response.status >= 200 && response.status < 400,
      statusCode: response.status,
    };
  } catch {
    return { reachable: false, statusCode: null };
  } finally {
    clearTimeout(timeout);
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse | { error: string }>,
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const monitoredProjects = featuredProjects.filter(
    (project) =>
      MONITORED_PROJECT_IDS.has(project.id) && Boolean(project.webSiteUrl),
  );

  const checkedAt = new Date().toISOString();
  const results = await Promise.all(
    monitoredProjects.map(async (project) => {
      const result = await checkWebsite(project.webSiteUrl);
      return [project.id, { ...result, checkedAt }] as const;
    }),
  );

  res.setHeader("Cache-Control", "no-store, max-age=0");
  return res.status(200).json(Object.fromEntries(results));
}
