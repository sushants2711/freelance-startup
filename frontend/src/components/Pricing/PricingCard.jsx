export default function PricingCard({ plan, isFirst }) {
  const containerClasses = [
    "p-[34px_28px] flex flex-col relative",
    "border-t border-[var(--line-strong)] md:border-t-0",
    !isFirst ? "md:border-l" : "",
    plan.isPopular ? "bg-ink-2" : "",
  ].join(" ");

  const buttonClasses = plan.isPopular
    ? "bg-gold text-ink hover:bg-gold-light"
    : "bg-transparent text-paper border border-[var(--line-strong)] hover:border-paper";

  return (
    <div className={containerClasses}>
      {plan.isPopular && (
        <div className="absolute top-[-1px] left-[-1px] right-[-1px] bg-gold text-ink font-mono text-[0.7rem] text-center py-[5px] tracking-[0.03em]">
          most requested
        </div>
      )}

      <div className={`mb-[24px] ${plan.isPopular ? "mt-[22px]" : ""}`}>
        <p className="font-serif text-[1.2rem] mb-[6px] font-semibold">
          {plan.name}
        </p>
        <p className="text-slate text-[0.88rem] mb-[20px]">{plan.subtitle}</p>
        <p className="font-serif text-[1.9rem] mb-[4px]">
          {plan.price}
          <span className="font-sans text-[0.85rem] text-slate font-normal">
            {" "}
            {plan.priceUnit}
          </span>
        </p>
        <p className="text-slate text-[0.82rem]">{plan.timeline}</p>
      </div>

      <ul className="list-none m-0 mb-[26px] p-0 grow">
        {plan.features.map((item, i) => (
          <li
            key={i}
            className="py-[9px] pl-[20px] border-t border-[var(--line)] first:border-none text-[0.9rem] text-[#d0d0d0] relative before:content-['—'] before:absolute before:left-0 before:text-gold"
          >
            {item}
          </li>
        ))}
      </ul>

      <a
        href={plan.buttonLink}
        className={`inline-block text-center no-underline font-semibold text-[0.95rem] py-[13px] px-[24px] rounded-[var(--radius-sm)] transition-all duration-150 ease-out ${buttonClasses}`}
      >
        {plan.buttonText}
      </a>
    </div>
  );
}
