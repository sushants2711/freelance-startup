export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-ink/92 backdrop-blur-md border-b border-[var(--line)]">
      <nav className="wrap flex items-center justify-between h-[68px]">
        <a
          href="#top"
          className="flex items-baseline gap-2 font-serif text-[1.15rem] font-semibold text-paper no-underline"
        >
          <span className="w-[9px] h-[9px] rounded-full bg-gold inline-block"></span>
          Northbridge Digital
        </a>
        <ul className="hidden sm:flex items-center gap-8 list-none m-0 p-0">
          {["Services", "Process", "Stack", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="no-underline text-slate text-[0.94rem] relative pb-1 hover:text-paper after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-gold after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-250 after:ease-out"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-block no-underline bg-gold text-ink font-semibold text-[0.88rem] py-[9px] px-[18px] rounded-[var(--radius-sm)] transition-colors duration-200 hover:bg-gold-light"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}
