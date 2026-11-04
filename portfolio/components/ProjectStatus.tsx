import type { ProjectItem } from "@/libs/portfolioData";
import type { SiteLanguage } from "@/libs/siteLanguage";

interface ProjectStatusProps {
  project: ProjectItem;
  language: SiteLanguage;
  compact?: boolean;
}

const labels = {
  en: {
    complete: "Complete",
    inDevelopment: "In development",
    maintenance: "In maintenance",
    archived: "Archived",
    functional: "Functional",
    partial: "Partially functional",
    unavailable: "Unavailable",
    testing: "In testing",
    appUnavailable: "Application unavailable",
  },
  pt: {
    complete: "Completo",
    inDevelopment: "Em desenvolvimento",
    maintenance: "Em manutenção",
    archived: "Arquivado",
    functional: "Funcional",
    partial: "Parcialmente funcional",
    unavailable: "Indisponível",
    testing: "Em testes",
    appUnavailable: "Aplicação indisponível",
  },
};

const developmentStyles: Record<string, string> = {
  complete: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "in-development": "bg-sky-500/15 text-sky-300 border-sky-500/30",
  maintenance: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  archived: "bg-slate-500/20 text-slate-300 border-slate-500/30",
};

const operationalStyles: Record<string, string> = {
  functional: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "partially-functional": "bg-amber-500/15 text-amber-300 border-amber-500/30",
  unavailable: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  testing: "bg-violet-500/15 text-violet-300 border-violet-500/30",
};

export default function ProjectStatus({
  project,
  language,
  compact = false,
}: ProjectStatusProps) {
  const copy = labels[language];
  const developmentStatus = project.developmentStatus ?? "in-development";
  const configuredStatus = project.operationalStatus ?? "testing";
  const operationalLabel =
    configuredStatus === "unavailable"
      ? copy.appUnavailable
      : configuredStatus === "partially-functional"
        ? copy.partial
        : configuredStatus === "testing"
          ? copy.testing
          : copy.functional;

  const operationalStyle = operationalStyles[configuredStatus];

  const developmentLabel = {
    complete: copy.complete,
    "in-development": copy.inDevelopment,
    maintenance: copy.maintenance,
    archived: copy.archived,
  }[developmentStatus];

  return (
    <div className={`flex flex-wrap items-center gap-2 ${compact ? "text-[10px]" : "text-xs"}`}>
      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-semibold ${developmentStyles[developmentStatus]}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {developmentLabel}
      </span>
      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-semibold ${operationalStyle}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {operationalLabel}
      </span>
    </div>
  );
}
