export default function Insights() {
  const articles = [
    {
      title: "Why we strictly use Figma before writing code",
      date: "Oct 12, 2026",
      category: "Process",
      excerpt:
        "Skipping the design phase is the most expensive mistake a startup can make. Here is our rigorous wireframing process.",
      link: "#",
    },
    {
      title: "Scaling an Employee Management System with PostgreSQL",
      date: "Sep 28, 2026",
      category: "Engineering",
      excerpt:
        "How we architected a relational database schema to handle complex organizational hierarchies and real-time attendance tracking.",
      link: "#",
    },
    {
      title: "Cutting AWS Costs by 40% using Docker & Nginx",
      date: "Sep 15, 2026",
      category: "Infrastructure",
      excerpt:
        "Serverless isn't always the answer. A deep dive into how we provisioned raw EC2 instances to drastically reduce infrastructure overhead.",
      link: "#",
    },
  ];

  return (
    <section
      className="py-[96px] border-b border-[var(--line)] max-sm:py-16"
      id="insights"
    >
      <div className="wrap">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[64px] gap-[24px]">
          <div className="max-w-[52ch]">
            <p className="text-gold text-[0.85rem] font-mono mb-[12px] uppercase tracking-wider">
              insights
            </p>
            <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight mt-[8px]">
              Engineering Notes
            </h2>
            <p className="text-slate mt-[16px] text-[1.1rem] leading-relaxed">
              Deep-dive technical tutorials, architectural decisions, and case
              studies written directly by our founders.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:inline-block text-gold-dark hover:text-gold font-mono text-[0.85rem] transition-colors no-underline"
          >
            View all notes →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {articles.map((article, i) => (
            <a
              key={i}
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
          ))}
        </div>

        <a
          href="#"
          className="inline-block md:hidden mt-[32px] text-gold-dark hover:text-gold font-mono text-[0.85rem] transition-colors no-underline"
        >
          View all notes →
        </a>
      </div>
    </section>
  );
}
