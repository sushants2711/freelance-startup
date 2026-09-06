export default function Process() {
  return (
    <section
      className="py-[96px] bg-paper text-ink border-b border-[var(--line-lt)] max-sm:py-16"
      id="process"
    >
      <div className="wrap">
        <div className="max-w-[52ch] mb-[64px]">
          <p className="text-gold-dark text-[0.85rem] font-mono mb-[12px] uppercase tracking-wider">
            process
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight mt-[8px]">
            Our Proven Engagement Methodology
          </h2>
          <p className="text-slate-lt mt-[16px] text-[1.1rem] leading-relaxed">
            Eliminating black-box development with complete transparency,
            clearly defined scopes, and structured milestones.
          </p>
        </div>

        <div className="border-t border-[var(--line-lt)]">
          {[
            {
              idx: "01",
              title: "Strategy & Architecture",
              desc: "Deep-dive scoping, UI/UX wireframing, and technical architecture mapping executed before a single line of code is written.",
            },
            {
              idx: "02",
              title: "Agile Engineering",
              desc: "Sprint-based, iterative development with weekly staging environment reviews, ensuring you have complete visibility and control over progress.",
            },
            {
              idx: "03",
              title: "QA & Deployment",
              desc: "Rigorous end-to-end testing pipeline followed by a zero-downtime deployment directly to your proprietary AWS infrastructure.",
            },
            {
              idx: "04",
              title: "Post-Launch Support",
              desc: "A dedicated 30-day optimization window featuring a strict bug-fix guarantee, providing predictable stability with zero hidden costs.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-[70px_1fr] gap-[32px] py-[32px] border-b border-[var(--line-lt)] max-sm:grid-cols-[44px_1fr] max-sm:gap-[20px]"
            >
              <span className="font-serif text-[1.6rem] text-gold-dark mt-[2px]">
                {step.idx}
              </span>
              <div>
                <h3 className="text-[1.3rem] mb-[10px] text-ink font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="m-0 text-slate-lt max-w-[65ch] text-[1.05rem] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
