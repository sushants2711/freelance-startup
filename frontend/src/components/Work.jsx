export default function Work() {
  return (
    <section
      className="py-[96px] border-b border-[var(--line)] max-sm:py-16"
      id="work"
    >
      <div className="wrap">
        <div className="max-w-[52ch] mb-[64px]">
          <p className="text-gold text-[0.85rem] font-mono mb-[12px] uppercase tracking-wider">
            work
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight mt-[8px]">
            Recent builds, in technical terms
          </h2>
          <p className="text-slate mt-[16px] text-[1.1rem] leading-relaxed">
            No mockups here — these are systems currently running or under
            active development, with the specs to match.
          </p>
        </div>

        <div className="flex flex-col gap-[1px] bg-[var(--line)]">
          <div className="bg-ink p-[36px] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[36px] items-start">
            <div className="flex flex-col h-full">
              <p className="font-mono text-gold text-[0.78rem] mb-[10px]">
                website
              </p>
              <h3 className="text-[1.3rem] mb-[12px] font-semibold">
                Brightrace Digital
              </h3>
              <p className="text-slate m-0 max-w-[44ch]">
                Comprehensive website maintenance and a complete structural
                redesign to enhance user experience, performance, and
                operational scalability.
              </p>
            </div>
            <div className="border-t border-[var(--line)] md:border-none md:pt-0 pt-6">
              <div className="grid grid-cols-[120px_1fr] gap-[16px] py-[11px] border-b border-[var(--line)] text-[0.88rem]">
                <span className="font-mono text-slate text-[0.78rem] pt-[2px]">
                  stack
                </span>
                <span className="text-[#d0d0d0]">React, Node.js</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-[16px] py-[11px] border-b border-[var(--line)] text-[0.88rem]">
                <span className="font-mono text-slate text-[0.78rem] pt-[2px]">
                  scope
                </span>
                <span className="text-[#d0d0d0]">
                  Full Redesign &amp; Maintenance
                </span>
              </div>
            </div>
          </div>

          <div className="bg-ink p-[36px] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[36px] items-start">
            <div className="flex flex-col h-full">
              <p className="font-mono text-gold text-[0.78rem] mb-[10px]">
                app &amp; platform
              </p>
              <h3 className="text-[1.3rem] mb-[12px] font-semibold">
                Employee Management System
              </h3>
              <p className="text-slate m-0 max-w-[44ch]">
                A cross-platform web and mobile application currently under
                active development. Core features include robust attendance
                tracking, modern UI enhancements, and seamless employee
                operations management.
              </p>
            </div>
            <div className="border-t border-[var(--line)] md:border-none md:pt-0 pt-6">
              <div className="grid grid-cols-[120px_1fr] gap-[16px] py-[11px] border-b border-[var(--line)] text-[0.88rem]">
                <span className="font-mono text-slate text-[0.78rem] pt-[2px]">
                  stack
                </span>
                <span className="text-[#d0d0d0]">
                  React Native, PostgreSQL, Node.js
                </span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-[16px] py-[11px] border-b border-[var(--line)] text-[0.88rem]">
                <span className="font-mono text-slate text-[0.78rem] pt-[2px]">
                  features
                </span>
                <span className="text-[#d0d0d0]">
                  Attendance Tracking, UI Overhaul
                </span>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-[16px] py-[11px] text-[0.88rem]">
                <span className="font-mono text-slate text-[0.78rem] pt-[2px]">
                  status
                </span>
                <span className="text-[#d0d0d0]">In Active Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
