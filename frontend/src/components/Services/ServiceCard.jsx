export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col">
      <div className="w-[46px] h-[46px] rounded-full bg-ink border border-[var(--line-strong)] flex items-center justify-center font-mono text-[0.85rem] text-gold mb-[22px]">
        {service.idx}
      </div>
      <h3 className="text-[1.25rem] mb-[12px] font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="text-slate text-[0.95rem] leading-relaxed m-0 mb-[16px]">
        {service.desc}
      </p>
      <div className="flex flex-wrap gap-[8px]">
        {service.tags.map((tag, i) => (
          <span
            key={i}
            className="font-mono text-[0.75rem] text-[#d0d0d0] border border-[var(--line-strong)] py-[4px] px-[10px] rounded-[4px] bg-[var(--line-lt)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
