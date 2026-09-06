import Section from "../layout/Section";
import { pricingData } from "./pricingData";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <Section
      id="pricing"
      subtitle="pricing"
      title="Strategic Engagement Models"
      description="Our baseline engagement structures. Every project undergoes a rigorous scoping phase to deliver a precise, formal proposal prior to commencement."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[var(--line-strong)]">
        {pricingData.map((plan, i) => (
          <PricingCard key={i} plan={plan} isFirst={i === 0} />
        ))}
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
    </Section>
  );
}
