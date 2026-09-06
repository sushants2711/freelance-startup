import Section from "../layout/Section";
import { insightsData } from "./insightsData";
import InsightCard from "./InsightCard";

export default function Insights() {
  return (
    <Section
      id="insights"
      subtitle="insights"
      title="Engineering Notes"
      description="Deep-dive technical tutorials, architectural decisions, and case studies written directly by our founders."
      headerRight={
        <a
          href="#"
          className="hidden md:inline-block text-gold-dark hover:text-gold font-mono text-[0.85rem] transition-colors no-underline"
        >
          View all notes →
        </a>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {insightsData.map((article, i) => (
          <InsightCard key={i} article={article} />
        ))}
      </div>

      <a
        href="#"
        className="inline-block md:hidden mt-[32px] text-gold-dark hover:text-gold font-mono text-[0.85rem] transition-colors no-underline"
      >
        View all notes →
      </a>
    </Section>
  );
}
