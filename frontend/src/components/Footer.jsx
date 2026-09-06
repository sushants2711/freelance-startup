export default function Footer() {
  return (
    <footer className="bg-paper text-slate-lt border-t border-[var(--line-lt)] py-[64px] text-[0.85rem]">
      <div className="wrap grid grid-cols-1 md:grid-cols-3 gap-[48px] md:gap-[24px]">
        <div className="flex flex-col items-start gap-[12px]">
          <span className="text-ink font-semibold text-[1.2rem] font-serif">
            Northbridge Digital
          </span>
          <p className="m-0 max-w-[30ch] leading-relaxed">
            An elite studio engineering high-performance web applications and
            robust infrastructure for startups.
          </p>
          <span className="mt-[12px] font-mono text-[0.75rem]">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        <div className="flex flex-col md:items-center gap-[12px]">
          <span className="text-ink font-semibold mb-[4px]">Legal</span>
          <a
            href="#"
            className="no-underline text-slate-lt hover:text-gold-dark transition-colors"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="#"
            className="no-underline text-slate-lt hover:text-gold-dark transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="no-underline text-slate-lt hover:text-gold-dark transition-colors"
          >
            Cookie Policy
          </a>
        </div>

        <div className="flex flex-col md:items-end gap-[12px]">
          <span className="text-ink font-semibold mb-[4px]">Contact</span>
          <a
            href="mailto:sushants2711@gmail.com"
            className="no-underline text-slate-lt hover:text-gold-dark transition-colors"
          >
            sushants2711@gmail.com
          </a>
          <span className="text-slate-lt mt-[12px] md:text-right">
            Full-stack development <br className="hidden md:block" /> &amp; AWS
            deployment
          </span>
        </div>
      </div>
    </footer>
  );
}
