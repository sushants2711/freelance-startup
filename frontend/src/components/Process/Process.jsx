import Section from "../layout/Section";
import { processData } from "./processData";
import ProcessStep from "./ProcessStep";

export default function Process() {
  return (
    <Section
      id="process"
      className="bg-paper text-ink border-[var(--line-lt)]"
      subtitle="process"
      title="Our Proven Engagement Methodology"
      description="Eliminating black-box development with complete transparency, clearly defined scopes, and structured milestones."
    >
      <div className="border-t border-[var(--line-lt)] mt-[-8px]">
        {processData.map((step, i) => (
          <ProcessStep key={i} step={step} />
        ))}
      </div>
    </Section>
  );
}
