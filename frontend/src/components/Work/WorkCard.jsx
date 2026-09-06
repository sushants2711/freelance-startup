export default function WorkCard({ project }) {
  return (
    <div className="bg-ink p-[36px] grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-[36px] items-start">
      <div className="flex flex-col h-full">
        <p className="font-mono text-gold text-[0.78rem] mb-[10px]">
          {project.category}
        </p>
        <h3 className="text-[1.3rem] mb-[12px] font-semibold">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper hover:text-gold transition-colors inline-flex items-center gap-[8px] no-underline"
            >
              {project.title}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          ) : (
            project.title
          )}
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
