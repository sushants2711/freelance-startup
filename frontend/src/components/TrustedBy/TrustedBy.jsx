export default function TrustedBy() {
  return (
    <section className="py-[48px] border-b border-[var(--line)] bg-[#111111] flex flex-col items-center justify-center">
      <p className="text-slate text-[0.85rem] font-mono mb-[24px] uppercase tracking-wider text-center">
        Trusted By
      </p>
      <div className="flex flex-wrap justify-center items-center gap-[48px] opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="https://brightracedigital.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[12px] no-underline text-paper group"
        >
          <img
            src="/brightracedigital.svg"
            alt="Brightrace Digital Logo"
            className="h-[80px] w-auto transition-transform group-hover:scale-105"
          />
        </a>
      </div>
    </section>
  );
}
