import { FC } from "react";

interface ExperienceButtonProps {
  setInformation: (info: string) => void;
  information: string;
  text: string;
  showInfo: string;
}

const ExperienceButton: FC<ExperienceButtonProps> = ({
  setInformation,
  showInfo,
  information,
  text,
}) => {
  const isActive = showInfo === information;

  return (
    <button
      onClick={() => setInformation(information)}
      className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-medium transition duration-200 ${
        isActive
          ? "border-cyan-400/40 bg-cyan-400/12 text-pink-500 shadow-[0_0_0_1px_rgba(34,211,238,0.1)]"
          : "border-[var(--border)] bg-white/[0.03] text-[var(--muted)] hover:border-cyan-400/20 hover:text-pink-500"
      }`}
    >
      {text}
    </button>
  );
};

export default ExperienceButton;
