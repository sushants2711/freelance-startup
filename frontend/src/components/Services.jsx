export default function Services() {
  return (
    <section
      className="py-[96px] border-b border-[var(--line)] max-sm:py-16"
      id="services"
    >
      <div className="wrap">
        <div className="max-w-[52ch] mb-[64px]">
          <p className="text-gold text-[0.85rem] font-mono mb-[12px] uppercase tracking-wider">
            services
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight mt-[8px]">
            From Concept to Production-Ready Product
          </h2>
          <p className="text-slate mt-[16px] text-[1.1rem] leading-relaxed">
            Engage us for a specific phase or entrust us with the entire
            lifecycle. Our commitment to precision and transparency remains
            absolute.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-[56px] gap-x-[48px]">
          {/* 01 */}
          <div className="flex flex-col">
            <div className="w-[46px] h-[46px] rounded-full bg-ink border border-[var(--line-strong)] flex items-center justify-center font-mono text-[0.85rem] text-gold mb-[22px]">
              01
            </div>
            <h3 className="text-[1.25rem] mb-[12px] font-semibold tracking-tight">
              Figma UI Design
            </h3>
            <p className="text-slate text-[0.95rem] leading-relaxed m-0 mb-[16px]">
              Expert Figma UI design and bespoke web experiences designed to
              captivate, empowering your brand&apos;s digital presence
              effortlessly.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Figma
              </span>
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                UI/UX
              </span>
            </div>
          </div>

          {/* 02 */}
          <div className="flex flex-col">
            <div className="w-[46px] h-[46px] rounded-full bg-ink border border-[var(--line-strong)] flex items-center justify-center font-mono text-[0.85rem] text-gold mb-[22px]">
              02
            </div>
            <h3 className="text-[1.25rem] mb-[12px] font-semibold tracking-tight">
              Full-stack development
            </h3>
            <p className="text-slate text-[0.95rem] leading-relaxed m-0 mb-[16px]">
              Architecturally sound codebases bridging the interface to the
              database, engineered for resilience, seamless integration, and
              long-term maintainability.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                React
              </span>
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Node.js
              </span>
            </div>
          </div>

          {/* 03 */}
          <div className="flex flex-col">
            <div className="w-[46px] h-[46px] rounded-full bg-ink border border-[var(--line-strong)] flex items-center justify-center font-mono text-[0.85rem] text-gold mb-[22px]">
              03
            </div>
            <h3 className="text-[1.25rem] mb-[12px] font-semibold tracking-tight">
              Backend &amp; APIs
            </h3>
            <p className="text-slate text-[0.95rem] leading-relaxed m-0 mb-[16px]">
              Secure, scalable databases, robust authentication, and
              high-throughput APIs designed to handle enterprise-level traffic
              without breaking a sweat.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                REST
              </span>
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                SQL
              </span>
            </div>
          </div>

          {/* 04 */}
          <div className="flex flex-col">
            <div className="w-[46px] h-[46px] rounded-full bg-ink border border-[var(--line-strong)] flex items-center justify-center font-mono text-[0.85rem] text-gold mb-[22px]">
              04
            </div>
            <h3 className="text-[1.25rem] mb-[12px] font-semibold tracking-tight">
              App development
            </h3>
            <p className="text-slate text-[0.95rem] leading-relaxed m-0 mb-[16px]">
              Native iOS and Android applications seamlessly synchronized with
              your centralized backend, ensuring data integrity across every
              platform.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                iOS
              </span>
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Android
              </span>
            </div>
          </div>

          {/* 05 */}
          <div className="flex flex-col">
            <div className="w-[46px] h-[46px] rounded-full bg-ink border border-[var(--line-strong)] flex items-center justify-center font-mono text-[0.85rem] text-gold mb-[22px]">
              05
            </div>
            <h3 className="text-[1.25rem] mb-[12px] font-semibold tracking-tight">
              AWS deployment
            </h3>
            <p className="text-slate text-[0.95rem] leading-relaxed m-0 mb-[16px]">
              Enterprise-grade infrastructure utilizing EC2, Docker, and Nginx,
              paired with fully automated CI/CD pipelines for frictionless
              deployments.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                AWS EC2
              </span>
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Docker
              </span>
            </div>
          </div>

          {/* 06 */}
          <div className="flex flex-col">
            <div className="w-[46px] h-[46px] rounded-full bg-ink border border-[var(--line-strong)] flex items-center justify-center font-mono text-[0.85rem] text-gold mb-[22px]">
              06
            </div>
            <h3 className="text-[1.25rem] mb-[12px] font-semibold tracking-tight">
              Graphic Design
            </h3>
            <p className="text-slate text-[0.95rem] leading-relaxed m-0 mb-[16px]">
              Compelling visual identities, marketing assets, and brand
              aesthetics designed to resonate deeply with your target audience
              and elevate your market presence.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Branding
              </span>
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Assets
              </span>
            </div>
          </div>

          {/* 07 */}
          <div className="flex flex-col">
            <div className="w-[46px] h-[46px] rounded-full bg-ink border border-[var(--line-strong)] flex items-center justify-center font-mono text-[0.85rem] text-gold mb-[22px]">
              07
            </div>
            <h3 className="text-[1.25rem] mb-[12px] font-semibold tracking-tight">
              SEO Optimization
            </h3>
            <p className="text-slate text-[0.95rem] leading-relaxed m-0 mb-[16px]">
              Comprehensive on-page and technical SEO strategies designed to
              maximize your visibility on Google and drive high-intent organic
              traffic to your platform.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Technical SEO
              </span>
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Ranking
              </span>
            </div>
          </div>

          {/* 08 */}
          <div className="flex flex-col">
            <div className="w-[46px] h-[46px] rounded-full bg-ink border border-[var(--line-strong)] flex items-center justify-center font-mono text-[0.85rem] text-gold mb-[22px]">
              08
            </div>
            <h3 className="text-[1.25rem] mb-[12px] font-semibold tracking-tight">
              Google Ads Campaigns
            </h3>
            <p className="text-slate text-[0.95rem] leading-relaxed m-0 mb-[16px]">
              Data-driven Google Ads management to rapidly scale user
              acquisition, optimize conversion rates, and maximize your return
              on ad spend (ROAS).
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                PPC
              </span>
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Conversion
              </span>
            </div>
          </div>

          {/* 09 */}
          <div className="flex flex-col">
            <div className="w-[46px] h-[46px] rounded-full bg-ink border border-[var(--line-strong)] flex items-center justify-center font-mono text-[0.85rem] text-gold mb-[22px]">
              09
            </div>
            <h3 className="text-[1.25rem] mb-[12px] font-semibold tracking-tight">
              Content Writing
            </h3>
            <p className="text-slate text-[0.95rem] leading-relaxed m-0 mb-[16px]">
              Authoritative, conversion-focused copywriting that articulates
              your value proposition clearly and engages your audience across
              all digital touchpoints.
            </p>
            <div className="flex flex-wrap gap-[8px]">
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Copywriting
              </span>
              <span className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]">
                Strategy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
