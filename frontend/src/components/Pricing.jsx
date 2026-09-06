export default function Pricing() {
  return (
    <section
      className="py-[96px] border-b border-[var(--line)] max-sm:py-16"
      id="pricing"
    >
      <div className="wrap">
        <div className="max-w-[52ch] mb-[64px]">
          <p className="text-gold text-[0.85rem] font-mono mb-[12px] uppercase tracking-wider">
            pricing
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight mt-[8px]">
            Strategic Engagement Models
          </h2>
          <p className="text-slate mt-[16px] text-[1.1rem] leading-relaxed">
            Our baseline engagement structures. Every project undergoes a
            rigorous scoping phase to deliver a precise, formal proposal prior
            to commencement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--line-strong)]">
          <div className="p-[34px_28px] border-t border-[var(--line-strong)] md:border-t-0 flex flex-col">
            <div className="mb-[24px]">
              <p className="font-serif text-[1.2rem] mb-[6px] font-semibold">
                Launch
              </p>
              <p className="text-slate text-[0.88rem] mb-[20px]">
                A site you can edit yourself
              </p>
              <p className="font-serif text-[1.9rem] mb-[4px]">
                $450
                <span className="font-sans text-[0.85rem] text-slate font-normal">
                  {" "}
                  starting
                </span>
              </p>
              <p className="text-slate text-[0.82rem]">
                Delivered in 1–2 weeks
              </p>
            </div>
            <ul className="list-none m-0 mb-[26px] p-0 grow">
              {[
                "Drag-and-drop or hand-coded site",
                "Up to 6 pages",
                "Mobile-responsive layout",
                "Editable without a developer",
              ].map((item, i) => (
                <li
                  key={i}
                  className="py-[9px] pl-[20px] border-t border-[var(--line)] first:border-none text-[0.9rem] text-[#d0d0d0] relative before:content-['—'] before:absolute before:left-0 before:text-gold"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block text-center no-underline font-semibold text-[0.95rem] py-[13px] px-[24px] rounded-[var(--radius-sm)] transition-all duration-150 ease-out bg-transparent text-paper border border-[var(--line-strong)] hover:border-paper"
            >
              Start with Launch
            </a>
          </div>

          <div className="p-[34px_28px] border-t md:border-t-0 md:border-l border-[var(--line-strong)] flex flex-col bg-ink-2 relative">
            <div className="absolute top-[-1px] left-[-1px] right-[-1px] bg-gold text-ink font-mono text-[0.7rem] text-center py-[5px] tracking-[0.03em]">
              most requested
            </div>
            <div className="mb-[24px] mt-[22px]">
              <p className="font-serif text-[1.2rem] mb-[6px] font-semibold">
                Build
              </p>
              <p className="text-slate text-[0.88rem] mb-[20px]">
                A full-stack web application
              </p>
              <p className="font-serif text-[1.9rem] mb-[4px]">
                $1,800
                <span className="font-sans text-[0.85rem] text-slate font-normal">
                  {" "}
                  starting
                </span>
              </p>
              <p className="text-slate text-[0.82rem]">
                Delivered in 3–6 weeks
              </p>
            </div>
            <ul className="list-none m-0 mb-[26px] p-0 grow">
              {[
                "Custom frontend and backend",
                "Database, auth, and APIs",
                "Deployed to your own AWS account",
                "CI/CD so updates ship themselves",
              ].map((item, i) => (
                <li
                  key={i}
                  className="py-[9px] pl-[20px] border-t border-[var(--line)] first:border-none text-[0.9rem] text-[#d0d0d0] relative before:content-['—'] before:absolute before:left-0 before:text-gold"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block text-center no-underline font-semibold text-[0.95rem] py-[13px] px-[24px] rounded-[var(--radius-sm)] transition-all duration-150 ease-out bg-gold text-ink hover:bg-gold-light"
            >
              Start with Build
            </a>
          </div>

          <div className="p-[34px_28px] border-t md:border-t-0 md:border-l border-[var(--line-strong)] flex flex-col">
            <div className="mb-[24px]">
              <p className="font-serif text-[1.2rem] mb-[6px] font-semibold">
                Scale
              </p>
              <p className="text-slate text-[0.88rem] mb-[20px]">
                Web, app, and infrastructure
              </p>
              <p className="font-serif text-[1.9rem] mb-[4px]">
                Custom
                <span className="font-sans text-[0.85rem] text-slate font-normal">
                  {" "}
                  quote
                </span>
              </p>
              <p className="text-slate text-[0.82rem]">
                Scoped after a short call
              </p>
            </div>
            <ul className="list-none m-0 mb-[26px] p-0 grow">
              {[
                "Everything in Build",
                "iOS / Android app on the same backend",
                "Production infra: EC2, Docker, Nginx",
                "Ongoing support window included",
              ].map((item, i) => (
                <li
                  key={i}
                  className="py-[9px] pl-[20px] border-t border-[var(--line)] first:border-none text-[0.9rem] text-[#d0d0d0] relative before:content-['—'] before:absolute before:left-0 before:text-gold"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block text-center no-underline font-semibold text-[0.95rem] py-[13px] px-[24px] rounded-[var(--radius-sm)] transition-all duration-150 ease-out bg-transparent text-paper border border-[var(--line-strong)] hover:border-paper"
            >
              Talk it through
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[16px] justify-between items-start md:items-center mt-[32px] p-[16px_24px] bg-ink-2 border border-[var(--line-strong)] rounded-[6px]">
          <p className="text-slate text-[0.88rem] m-0">
            Fixed-price for defined scopes; hourly available for ongoing or
            open-ended work.
          </p>
          <div className="flex items-center gap-[8px]">
            <span className="w-[8px] h-[8px] rounded-full bg-gold animate-pulse"></span>
            <span className="text-gold font-mono text-[0.8rem] font-semibold tracking-wide uppercase">
              30-Day Bug-Fix Guarantee Included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
