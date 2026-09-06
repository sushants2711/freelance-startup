export default function WorkCard({ project }) {
  return (
    <div className="bg-ink p-[36px] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[36px] items-start">
      <div className="flex flex-col h-full">
        <p className="font-mono text-gold text-[0.78rem] mb-[10px]">
          {project.category}
        </p>
        <h3 className="text-[1.3rem] mb-[12px] font-semibold">
          {project.title}
        </h3>
        <p className="text-slate m-0 max-w-[44ch]">{project.description}</p>
      </div>
      <div className="border-t border-[var(--line)] md:border-none md:pt-0 pt-6">
        {project.details.map((detail, index) => (
          <div
            key={index}
            className={`grid grid-cols-[120px_1fr] gap-[16px] py-[11px] text-[0.88rem] ${
              index !== project.details.length - 1
                ? "border-b border-[var(--line)]"
                : ""
            }`}
          >
            <span className="font-mono text-slate text-[0.78rem] pt-[2px]">
              {detail.label}
            </span>
            <span className="text-[#d0d0d0]">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
