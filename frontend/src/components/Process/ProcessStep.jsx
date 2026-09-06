export default function ProcessStep({ step }) {
  return (
    <div className="grid grid-cols-[70px_1fr] gap-[32px] py-[32px] border-b border-[var(--line-lt)] max-sm:grid-cols-[44px_1fr] max-sm:gap-[20px]">
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
  );
}
