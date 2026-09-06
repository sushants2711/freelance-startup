export default function InsightCard({ article }) {
  return (
    <a
      href={article.link}
      className="group block bg-ink-2 border border-[var(--line-strong)] rounded-[8px] p-[32px] hover:border-gold transition-colors no-underline cursor-pointer"
    >
      <div className="flex items-center gap-[12px] mb-[20px]">
        <span className="font-mono text-[0.7rem] text-ink bg-gold py-[4px] px-[8px] rounded-[4px] tracking-wider uppercase font-semibold">
          {article.category}
        </span>
        <span className="font-mono text-[0.75rem] text-slate">
          {article.date}
        </span>
      </div>
      <h3 className="text-paper text-[1.3rem] font-bold leading-[1.3] mb-[12px] group-hover:text-gold transition-colors">
        {article.title}
      </h3>
      <p className="text-slate text-[0.95rem] leading-relaxed m-0">
        {article.excerpt}
      </p>
    </a>
  );
}
