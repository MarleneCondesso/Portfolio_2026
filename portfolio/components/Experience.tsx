import { useEffect, useMemo, useState } from "react";
import ExperienceButton from "./ExperienceButton";
import ExperienceCard from "./ExperienceCard";
import { experiences, type ExperienceGroup } from "@/libs/portfolioData";

export default function Experience() {
  const [activeGroup, setActiveGroup] = useState<ExperienceGroup>("it");
  const [showInfo, setShowInfo] = useState("n4it");

  const visibleExperiences = useMemo(
    () => experiences.filter((experience) => experience.group === activeGroup),
    [activeGroup],
  );

  useEffect(() => {
    if (!visibleExperiences.some((experience) => experience.id === showInfo)) {
      setShowInfo(visibleExperiences[0]?.id ?? "n4it");
    }
  }, [showInfo, visibleExperiences]);

  const selectedExperience =
    experiences.find((experience) => experience.id === showInfo) ??
    experiences[0];

  return (
    <section id="experience" className="py-20">
      <div className="items-center gap-6 py-16 text-xl font-medium text-slate-200 xl:text-4xl">
        Experience
        <div className="h-1 w-16 translate-y-5 bg-gradient-to-r from-pink-500 to-purple-500 xl:w-28"></div>
      </div>

      <div className="grid gap-6 rounded-[2.5rem] border border-slate-700/50 bg-slate-900/40 p-6 md:p-8 xl:grid-cols-[280px_minmax(0,1fr)]">
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <button
              onClick={() => setActiveGroup("it")}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
                activeGroup === "it"
                  ? "bg-pink-500 text-white"
                  : "border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-slate-200"
              }`}
            >
              IT area
            </button>
            <button
              onClick={() => setActiveGroup("other")}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
                activeGroup === "other"
                  ? "bg-pink-500 text-white"
                  : "border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-slate-200"
              }`}
            >
              Other areas
            </button>
          </div>

          <div className="space-y-2">
            {visibleExperiences.map((experience) => (
              <ExperienceButton
                key={experience.id}
                information={experience.id}
                showInfo={showInfo}
                setInformation={setShowInfo}
                text={experience.label}
              />
            ))}
          </div>
        </div>

        <ExperienceCard
          showInfo={showInfo}
          technologies={selectedExperience.technologies}
        />
      </div>
    </section>
  );
}
