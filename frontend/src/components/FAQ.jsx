export default function FAQ() {
  return (
    <section
      className="py-[96px] bg-paper text-ink border-b border-[var(--line-lt)] max-sm:py-16"
      id="faq"
    >
      <div className="wrap">
        <div className="max-w-[52ch] mb-[56px]">
          <p className="text-gold-dark text-[0.85rem] font-mono mb-[12px]">
            faq
          </p>
          <h2 className="text-[clamp(1.7rem,3vw,2.3rem)]">
            Before you reach out
          </h2>
        </div>

        <div className="border-t border-[var(--line-lt)]">
          {[
            {
              q: "Who actually does the work?",
              a: "One person — no work gets subcontracted or handed to a junior partway through. You're talking to the same developer who writes the code and configures the server.",
            },
            {
              q: "Why AWS instead of a website builder?",
              a: "Website builders are the right call for simple sites — that's what the Launch package covers. Once there's a database, user accounts, or an app involved, you need infrastructure you control, so it can scale without a rebuild.",
            },
            {
              q: "Do I own the code and the server?",
              a: "Yes. Projects deploy to your own AWS account and repository from day one — nothing sits behind a personal account you'd lose access to later.",
            },
            {
              q: "What happens after launch?",
              a: "A fixed-scope support window is included for bug fixes and small adjustments. Anything beyond that is quoted separately, so there's no ongoing charge you didn't agree to.",
            },
            {
              q: "How fast can we start?",
              a: "Usually within a few days of the scope being agreed — send the project details below and you'll hear back within two working days.",
            },
          ].map((item, i) => (
            <details key={i} className="border-b border-[var(--line-lt)] group">
              <summary className="py-[22px] px-[4px] cursor-pointer list-none flex items-center justify-between gap-[20px] font-serif text-[1.08rem] text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="font-mono text-gold-dark text-[1.1rem] shrink-0 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-[4px] pb-[24px] text-slate-lt max-w-[62ch] m-0">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
