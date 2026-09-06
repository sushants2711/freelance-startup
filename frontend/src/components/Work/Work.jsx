import Section from "../layout/Section";
import { workData } from "./workData";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <Section
      id="work"
      subtitle="work"
      title="Recent builds, in technical terms"
      description="No mockups here — these are systems currently running or under active development, with the specs to match."
    >
      <div className="flex flex-col gap-[1px] bg-[var(--line)]">
        {workData.map((project, index) => (
          <WorkCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}
