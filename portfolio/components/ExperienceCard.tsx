import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

interface ExperienceCardProps {
  showInfo: string;
  technologies: string[];
}

const experienceCopy: Record<
  string,
  {
    title: string;
    period: string;
    position: string;
    description: string;
    taskTitle: string;
    tasks: string[];
  }
> = {
  n4it: {
    title: "N4IT Software",
    period: "Mar 2022 - Jul 2022",
    position: "Web Developer - Intern",
    description:
      "Internship carried out within the Professional Higher Technical Course in Agile Software Development, was based on the implementation of an internal portal for the company itself to manage employees, equipment, vacations, and schedules. ",
    taskTitle: "Tasks:",
    tasks: [
      "Requirements gathering, analysis and design.",
      "Sprint planning.",
      "Web frontend development with React.",
      "Backend development with .NET.",
    ],
  },
  kaizen: {
    title: "Kaizen Tech",
    period: "May 2025 - Nov 2025",
    position: "Full Stack Developer - Intern",
    description: "Intership carried out within IEFP with a business based on replicating factory floor data in software, such as KPIs, machine start-ups, and production reports (good or bad), etc",
    taskTitle: "Tasks:",
    tasks: [
      "Development of C# pages and functionalities, leveraging Parsec components.",
      "Creation of shop floor interfaces (dashboards, recipe management, OEE monitoring, machine start/stop, production checks, material supply, etc.)",
      "Integration with SQL databases to support production processes and industrial monitoring."
    ]
  },
  ruga: {
    title: "RUGA",
    period: "Jan 2024 - Present",
    position: "Textile Operator",
    description: "",
    taskTitle: "Main responsibilities:",
    tasks: [
      "Applying pins and hangtags to textile pieces.",
      "Identifying possible anomalies in textile pieces.",
      "Cleaning textile pieces.",
      "Folding textile pieces.",
    ],
  },
  dolores: {
    title: "Dolores Hipólito",
    period: "Oct 2019 - Oct 2020",
    position: "Textile Operator",
    description: "",
    taskTitle: "Main responsibilities:",
    tasks: [
      "Counting and packing finished work.",
      "Detecting possible anomalies in textile pieces.",
      "Operating textile machines.",
    ],
  },
  fm: {
    title: "FM Têxteis",
    period: "Jan 2017 - Jan 2019",
    position: "Textile Operator",
    description: "",
    taskTitle: "Main responsibilities:",
    tasks: [
      "Cutting sector work.",
      "Textile packaging and finishing.",
      "Confection sector support.",
      "Packing and removing guides for finished textile work.",
    ],
  },
  esposende: {
    title: "Esposende 2000",
    period: "Apr 2016 - Jul 2016",
    position: "Activity Organization Assistant",
    description:
      "Professional internship carried out within the scope of the Environmental Management technical course.",
    taskTitle: "Examples of activities:",
    tasks: ["Trails.", "Walks.", "BTT races."],
  },
  bombeiros: {
    title: "Bombeiros de Fão",
    period: "May 2015 - Jul 2015",
    position: "Forest Safety Assistant",
    description:
      "Professional internship carried out within the scope of the Environmental Management technical course.",
    taskTitle: "Tasks:",
    tasks: [
      "Identification of fire hydrants and water points.",
      "Marking georeferenced information related to already identified fire hydrants and water points.",
      "Patrolling forest areas at risk of fire.",
    ],
  },
};

const ExperienceCard: FC<ExperienceCardProps> = ({
  showInfo,
  technologies,
}) => {
  const content = experienceCopy[showInfo] ?? experienceCopy.n4it;

  return (
    <div className="flex h-full flex-col gap-6 rounded-[2rem] border border-slate-700/50 bg-slate-900/60 p-6 md:p-8">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-400">
              Company
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              {content.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm text-slate-200">
            <FiCalendar size={14} className="text-pink-400" />
            <span>{content.period}</span>
          </div>
        </div>

        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
          {content.position}
        </p>

        {content.description && (
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            {content.description}
          </p>
        )}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[1.6rem] border border-slate-700 bg-slate-800/50 p-5">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            {content.taskTitle}
          </h4>
          <div className="space-y-3">
            {content.tasks.map((task) => (
              <div key={task} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500/10 text-pink-400">
                  <FaArrowRight size={9} />
                </div>
                <p className="text-sm leading-7 text-slate-300">{task}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-slate-700 bg-slate-800/50 p-5">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white">
            Toolkit
          </h4>
          <div className="flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-600 bg-slate-700/50 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
