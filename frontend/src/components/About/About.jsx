import Section from "../layout/Section";
import { teamData } from "./teamData";
import TeamCard from "./TeamCard";

export default function About() {
  return (
    <Section id="about" className="bg-paper text-ink border-[var(--line-lt)]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-[64px] items-start">
        <div className="max-w-[52ch]">
          <p className="text-gold-dark text-[0.85rem] font-mono mb-[12px] uppercase tracking-wider">
            about us
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight mt-[8px]">
            Two Engineers. One Shared Mission.
          </h2>
        </div>

        <div className="flex flex-col gap-[24px]">
          <p className="m-0 text-[1.08rem] text-slate-lt leading-relaxed">
            Our journey began when founders Sushant Kumar Singh and Sonu Kumar
            met online, bound by a shared vision and a passion for building
            exceptional software. While completing our Computer Science
            Engineering (BE-CSE, 2021–2025) degrees, we accumulated over 1.5
            years of intensive industry experience, ultimately deciding to
            combine our expertise and launch our own studio.
          </p>
          <p className="m-0 text-[1.08rem] text-slate-lt leading-relaxed">
            Our core mission is simple: to help startups and established
            companies turn their bold ideas into scalable, production-ready
            realities. As we scale, we are expanding our capabilities to offer
            end-to-end creative services, proudly welcoming our first team
            member, Abhishek Kumar, to lead our graphic and video design.
          </p>
        </div>
      </div>

      <div className="mt-[88px] pt-[64px] border-t border-[var(--line-lt-strong)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
          {teamData.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </Section>
  );
}
