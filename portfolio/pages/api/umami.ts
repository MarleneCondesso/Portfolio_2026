import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const startDate = moment("28-10-2024", "DD-MM-YYYY").unix();
    const endDate = moment(Date.now()).unix();
    const websiteId = process.env.UMAMI_WEBSITE_ID;
    const apiUrl = process.env.UMAMI_API_URL;
    const apiToken = process.env.UMAMI_API_TOKEN;

    if (!websiteId || !apiUrl || !apiToken) {
      return res.status(204).end();
    }

    const normalizedApiUrl = apiUrl.replace(/\/$/, "");
    const response = await fetch(
      `${normalizedApiUrl}/api/websites/${websiteId}/stats?startAt=${startDate}&endAt=${endDate}`,
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      },
    );

    if (!response.ok) {
      return res.status(204).end();
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch {
    res.status(204).end();
  }
}
