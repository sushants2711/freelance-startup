export default function Section({
  id,
  subtitle,
  title,
  description,
  children,
  className = "",
  headerRight,
}) {
  return (
    <section
      className={`py-[96px] border-b border-[var(--line)] max-sm:py-16 ${className}`}
      id={id}
    >
      <div className="wrap">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[64px] gap-[24px]">
          <div className="max-w-[52ch]">
            {subtitle && (
              <p className="text-gold text-[0.85rem] font-mono mb-[12px] uppercase tracking-wider">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight mt-[8px]">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-slate mt-[16px] text-[1.1rem] leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {headerRight && headerRight}
        </div>
        {children}
      </div>
    </section>
  );
}
