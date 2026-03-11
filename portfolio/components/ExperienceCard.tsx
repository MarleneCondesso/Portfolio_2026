import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import {
  getExperienceContent,
  getExperienceTechnologyLabels,
  siteCopy,
} from "@/libs/siteCopy";
import { useSiteLanguage } from "@/libs/siteLanguage";

interface ExperienceCardProps {
  showInfo: string;
  technologies: string[];
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  showInfo,
  technologies,
}) => {
  const { language } = useSiteLanguage();
  const copy = siteCopy[language];
  const content = getExperienceContent(language, showInfo);
  const localizedTechnologies = getExperienceTechnologyLabels(
    language,
    technologies,
  );

  return (
    <div className="flex h-full flex-col gap-6 rounded-[2rem] border border-slate-700/50 bg-slate-900/60 p-6 md:p-8">
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-pink-400">
              {copy.experience.company}
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
            {copy.experience.toolkit}
          </h4>
          <div className="flex flex-wrap gap-3">
            {localizedTechnologies.map((technology) => (
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
