import { FaCheckCircle } from "react-icons/fa";

export default function TechModal({ activeTech, onClose }) {
  if (!activeTech) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-[16px] md:p-[48px] bg-ink/60 backdrop-blur-md animate-[fadeIn_0.2s_ease-out] overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-paper border border-[var(--line-lt-strong)] rounded-[12px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] max-w-[700px] w-full relative animate-[slideUp_0.3s_ease-out] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] z-10 w-[36px] h-[36px] rounded-full bg-ink/40 backdrop-blur-md text-white hover:bg-ink transition-colors cursor-pointer flex items-center justify-center border-none"
          aria-label="Close"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Header Image Cover */}
        <div className="w-full h-[180px] sm:h-[240px] relative bg-ink">
          <img
            src="/tech_cover_bg.jpg"
            alt="Technology abstract background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-paper to-transparent opacity-30"></div>
        </div>

        <div className="px-[24px] sm:px-[48px] pb-[48px] relative">
          {/* Language Logo Badge overlapping the cover */}
          <div className="w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] flex items-center justify-center rounded-[16px] border-4 border-paper bg-white shadow-lg absolute top-[-36px] sm:top-[-44px]">
            <activeTech.icon
              size={48}
              style={{ color: activeTech.color }}
              className="max-sm:scale-75"
            />
          </div>

          {/* Title and Meta */}
          <div className="pt-[52px] sm:pt-[64px] mb-[24px]">
            <p className="text-gold-dark font-mono text-[0.8rem] uppercase tracking-wider mb-[8px]">
              Engineering Note • Architecture
            </p>
            <h3 className="text-[2rem] sm:text-[2.5rem] font-bold text-ink leading-tight tracking-tight">
              Why we build with {activeTech.name}
            </h3>
          </div>

          {/* Main Blog Content */}
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-lt text-[1.1rem] leading-relaxed mb-[32px] font-medium">
              {activeTech.rationale}
            </p>

            <h4 className="text-[1.25rem] font-bold text-ink mb-[16px]">
              Key Advantages
            </h4>
            <ul className="flex flex-col gap-[12px] p-0 m-0 list-none">
              {activeTech.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-[12px] text-slate-lt text-[1.05rem]"
                >
                  <FaCheckCircle
                    className="text-gold mt-[4px] shrink-0"
                    size={16}
                  />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
