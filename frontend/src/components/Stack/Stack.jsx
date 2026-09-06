import { useState, useEffect } from "react";
import Section from "../layout/Section";
import { stackData } from "./stackData";
import TechModal from "./TechModal";

export default function Stack() {
  const [activeTech, setActiveTech] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveTech(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Section
      id="stack"
      className="bg-paper text-ink border-[var(--line-lt)] relative"
      subtitle="stack"
      title="Built on tools you can hire for later"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[16px]">
        {stackData.map((tech) => {
          const Icon = tech.icon;
          return (
            <button
              key={tech.name}
              onClick={() => setActiveTech(tech)}
              className="flex items-center gap-[12px] border border-[var(--line-lt-strong)] py-[12px] px-[16px] rounded-[6px] hover:border-gold hover:shadow-[0_4px_14px_rgba(201,162,39,0.15)] transition-all cursor-pointer bg-[#fdfdfd] text-left outline-none focus:border-gold group"
            >
              <Icon
                size={24}
                style={{ color: tech.color }}
                className="shrink-0 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
              />
              <span className="font-mono text-[0.85rem] text-[#222] font-medium leading-tight">
                {tech.name}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-[42px] text-slate-lt max-w-[60ch]">
        Standard, widely-used tools on purpose — any developer you bring on
        later can pick up the project without a translation period. Click any
        tool above to see why we chose it.
      </p>

      <TechModal activeTech={activeTech} onClose={() => setActiveTech(null)} />
    </Section>
  );
}
