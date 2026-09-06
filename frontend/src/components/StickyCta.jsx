import { useEffect, useState } from "react";

export default function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;

      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");

      if (!hero || !contact) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const contactTop = contact.getBoundingClientRect().top;

      const shouldShow = heroBottom < 0 && contactTop > window.innerHeight;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initially

    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  return (
    <div
      className={`fixed left-0 right-0 bottom-0 z-30 bg-ink-2 border-t border-[var(--line-strong)] shadow-[0_-12px_30px_-12px_rgba(0,0,0,0.4)] transition-transform duration-350 ease-out ${isVisible ? "translate-y-0" : "translate-y-[110%]"}`}
    >
      <div className="wrap flex items-center justify-between py-[14px] max-sm:py-[12px] max-sm:px-[20px] gap-[20px] flex-wrap">
        <p className="m-0 text-[0.92rem] max-sm:text-[0.85rem] text-paper">
          <strong className="font-serif font-medium">
            Have a project in mind?
          </strong>{" "}
          &nbsp;Get a scoped reply within two working days.
        </p>
        <div className="flex items-center gap-[16px]">
          <a
            href="#contact"
            className="inline-block no-underline font-semibold text-[0.95rem] py-[13px] px-[24px] rounded-[var(--radius-sm)] transition-all duration-150 ease-out bg-gold text-ink hover:bg-gold-light"
          >
            Start a project
          </a>
          <button
            onClick={() => {
              setDismissed(true);
              setIsVisible(false);
            }}
            className="bg-transparent border-none text-slate cursor-pointer text-[1rem] p-[4px] leading-[1] hover:text-paper"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
