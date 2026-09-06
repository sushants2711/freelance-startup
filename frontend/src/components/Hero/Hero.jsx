import { useEffect, useState } from "react";
import { heroLines as lines, heroStats } from "./heroData";

export default function Hero() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [displayedLines, setDisplayedLines] = useState(
    prefersReducedMotion ? lines : [],
  );
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const isDone = prefersReducedMotion || currentLineIndex >= lines.length;

  useEffect(() => {
    if (isDone) return;

    const currentFullText = lines[currentLineIndex].text;

    if (currentCharIndex < currentFullText.length) {
      const timeout = setTimeout(
        () => {
          setCurrentCharIndex((prev) => prev + 1);
          setDisplayedLines((prevLines) => {
            const newLines = [...prevLines];
            if (!newLines[currentLineIndex]) {
              newLines[currentLineIndex] = {
                ...lines[currentLineIndex],
                text: "",
              };
            }
            newLines[currentLineIndex].text = currentFullText.slice(
              0,
              currentCharIndex + 1,
            );
            return newLines;
          });
        },
        currentLineIndex === 0 ? 28 : 10,
      );
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 160);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, isDone]);

  return (
    <section
      id="hero"
      className="py-[88px] pb-[96px] border-b border-[var(--line)] bg-[radial-gradient(ellipse_900px_500px_at_85%_-10%,rgba(201,162,39,0.10),transparent_60%)] bg-ink max-sm:py-14"
    >
      <div className="wrap grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
        <div>
          <p className="text-gold text-[0.85rem] font-mono mb-[18px]">
            northbridge
          </p>
          <h1 className="text-[clamp(2.3rem,4.4vw,3.4rem)] leading-[1.08] max-w-[14ch]">
            End-to-End Engineering. Seamless Execution.
          </h1>
          <p className="mt-[26px] mb-[34px] text-[#cfcfcf] text-[1.08rem] max-w-[46ch]">
            Northbridge Digital architects, develops, and deploys
            high-performance web and mobile applications. We deliver robust
            solutions hosted on your own infrastructure—ensuring full ownership,
            exceptional scalability, and zero vendor lock-in.
          </p>
          <div className="flex gap-[14px] flex-wrap">
            <a
              href="#contact"
              className="inline-block no-underline font-semibold text-[0.95rem] py-[13px] px-[24px] rounded-[var(--radius-sm)] transition-all duration-150 ease-out bg-gold text-ink hover:bg-gold-light"
            >
              Start a project
            </a>
            <a
              href="#services"
              className="inline-block no-underline font-semibold text-[0.95rem] py-[13px] px-[24px] rounded-[var(--radius-sm)] transition-all duration-150 ease-out bg-transparent text-paper border border-[var(--line-strong)] hover:border-paper"
            >
              See what&apos;s included
            </a>
          </div>
          <div className="flex gap-[36px] mt-[52px] flex-wrap">
            {heroStats.map((stat, i) => (
              <div
                key={i}
                className="border-l border-[var(--line-strong)] pl-[14px]"
              >
                <span className="font-serif text-[1.5rem] block">
                  {stat.value}
                </span>
                <span className="text-slate text-[0.85rem]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-ink-2 border border-[var(--line-strong)] rounded-[6px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]"
          aria-hidden="true"
        >
          <div className="flex items-center gap-[7px] py-[11px] px-[14px] border-b border-[var(--line)]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#3a3a3a]"></span>
            <span className="w-[9px] h-[9px] rounded-full bg-[#3a3a3a]"></span>
            <span className="w-[9px] h-[9px] rounded-full bg-[#3a3a3a]"></span>
            <span className="ml-[8px] text-slate text-[0.78rem] font-mono">
              deploy.log
            </span>
          </div>
          <div className="py-[22px] px-[20px] pb-[26px] font-mono text-[0.86rem] min-h-[210px]">
            {displayedLines.map((line, idx) => (
              <p
                key={idx}
                className={`m-0 mb-[10px] whitespace-pre-wrap ${line.cls}`}
              >
                {line.text}
              </p>
            ))}
            {(!isDone || displayedLines.length < lines.length) && (
              <span className="inline-block w-[7px] h-[14px] bg-paper align-[-2px] animate-[blink_1s_step-end_infinite]"></span>
            )}
            {isDone && (
              <span className="inline-block w-[7px] h-[14px] bg-paper align-[-2px] animate-[blink_1s_step-end_infinite]"></span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
