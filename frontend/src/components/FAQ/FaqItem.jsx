export default function FaqItem({ item }) {
  return (
    <details className="border-b border-[var(--line-lt)] group">
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
  );
}
