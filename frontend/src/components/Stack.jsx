import { useState, useEffect } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiCloudflare,
  SiDjango,
  SiVuedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { FaAws, FaCheckCircle } from "react-icons/fa";

export default function Stack() {
  const [activeTech, setActiveTech] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveTech(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const technologies = [
    {
      name: "React.js",
      icon: SiReact,
      color: "#61DAFB",
      rationale:
        "We use React to build highly dynamic, interactive user interfaces. By leveraging a strict component-driven architecture, we ensure your frontend is modular, easily maintainable, and extremely performant at scale.",
      features: [
        "Lightning-fast Virtual DOM updates",
        "Reusable component-based architecture",
        "Massive open-source ecosystem",
      ],
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
      rationale:
        "When performance and SEO are mission-critical, we reach for Next.js. It allows us to build server-rendered and statically generated React applications that load instantly and rank perfectly on Google.",
      features: [
        "Server-Side Rendering (SSR) for flawless SEO",
        "Static Site Generation (SSG) for blazing speed",
        "Intuitive file-based routing and API endpoints",
      ],
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      rationale:
        "Using Node.js allows our engineers to write JavaScript across the entire stack. This unified language approach eliminates context-switching, speeds up development, and results in a highly concurrent, non-blocking backend.",
      features: [
        "Asynchronous, event-driven architecture",
        "Unified full-stack JavaScript environment",
        "High throughput for concurrent requests",
      ],
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      rationale:
        "The undisputed language of the web. We strictly adhere to modern ES6+ paradigms to write elegant, secure, and highly optimized code that executes flawlessly in any modern browser.",
      features: [
        "Universal browser support",
        "Modern ES6+ syntax and strict typing (via JSDoc/TS)",
        "Dynamic and highly flexible",
      ],
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      rationale:
        "For applications that handle massive volumes of unstructured or rapidly changing data, we architect MongoDB clusters. Its NoSQL document model gives us unmatched schema flexibility and horizontal scalability.",
      features: [
        "Flexible JSON-like document model",
        "Horizontal scaling out-of-the-box",
        "Ideal for rapid prototyping and iteration",
      ],
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
      rationale:
        "The industry gold standard for relational databases. When your product requires strict ACID compliance, complex multi-table joins, and unshakeable data integrity, we build robust MySQL schemas.",
      features: [
        "Strict ACID compliance",
        "Highly optimized relational queries",
        "Battle-tested enterprise reliability",
      ],
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#4169E1",
      rationale:
        "Our go-to database for complex, enterprise-grade data structures. Postgres handles massive concurrency, advanced indexing, and geospatial queries with absolute precision.",
      features: [
        "Advanced indexing and full-text search",
        "Unmatched concurrency handling",
        "Extensible and highly standards-compliant",
      ],
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#FFCA28",
      rationale:
        "Perfect for real-time applications and rapid MVPs. We leverage Firebase's ecosystem for instant authentication, real-time database syncing, and serverless edge functions.",
      features: [
        "Real-time NoSQL database syncing",
        "Drop-in authentication via OAuth",
        "Built-in hosting and edge functions",
      ],
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
      rationale:
        "We containerize every application by default. Docker guarantees the infamous 'it works on my machine' problem never happens. Your code runs identically locally and in production.",
      features: [
        "Immutable infrastructure",
        "Complete environment isolation",
        "Seamless horizontal scaling",
      ],
    },
    {
      name: "AWS Deployment",
      icon: FaAws,
      color: "#232F3E",
      rationale:
        "We don't rely on expensive platform-as-a-service providers. We deploy directly to raw AWS EC2 instances inside your own AWS account, giving you 100% ownership, zero lock-in, and drastically lower hosting costs.",
      features: [
        "100% infrastructure ownership",
        "Zero platform lock-in",
        "Enterprise-grade uptime and security",
      ],
    },
    {
      name: "Nginx",
      icon: SiNginx,
      color: "#009639",
      rationale:
        "Sitting at the edge of your infrastructure, Nginx acts as our high-performance reverse proxy. We configure it to handle SSL termination, load balancing, and secure traffic routing to your backend nodes.",
      features: [
        "High-performance reverse proxy",
        "Automated SSL termination",
        "Efficient static asset caching",
      ],
    },
    {
      name: "GitHub Actions",
      icon: SiGithubactions,
      color: "#2088FF",
      rationale:
        "Manual deployments are prone to human error. We build fully automated CI/CD pipelines so that every time we push code, it is automatically tested, built, and deployed to your servers with zero downtime.",
      features: [
        "Automated testing on every commit",
        "Zero-downtime rolling deployments",
        "Strict version control and rollback",
      ],
    },
    {
      name: "Cloudflare",
      icon: SiCloudflare,
      color: "#F38020",
      rationale:
        "We route all DNS through Cloudflare to secure your application at the network level. It caches assets globally, mitigates DDoS attacks instantly, and dramatically accelerates response times worldwide.",
      features: [
        "Global CDN edge caching",
        "Advanced DDoS mitigation",
        "Strict DNS security and WAF",
      ],
    },
    {
      name: "Django",
      icon: SiDjango,
      color: "#092E20",
      rationale:
        "A high-level Python framework that encourages rapid, clean design. We utilize Django when a project requires a robust administrative interface and complex data modeling straight out of the box.",
      features: [
        "Built-in admin panel",
        "Batteries-included ecosystem",
        "Highly secure ORM and routing",
      ],
    },
    {
      name: "Vue.js",
      icon: SiVuedotjs,
      color: "#4FC08D",
      rationale:
        "A highly progressive and lightweight JavaScript framework. We reach for Vue when a project demands a highly reactive, highly performant frontend architecture with minimal overhead.",
      features: [
        "Lightweight footprint",
        "Highly reactive data binding",
        "Approachable and elegant syntax",
      ],
    },
  ];

  return (
    <section
      className="py-[96px] bg-paper text-ink border-b border-[var(--line-lt)] max-sm:py-16 relative"
      id="stack"
    >
      <div className="wrap relative">
        <div className="max-w-[52ch] mb-[64px]">
          <p className="text-gold-dark text-[0.85rem] font-mono mb-[12px] uppercase tracking-wider">
            stack
          </p>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight mt-[8px]">
            Built on tools you can hire for later
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[16px]">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <button
                key={tech.name}
                onClick={() => setActiveTech(tech)}
                className="flex items-center gap-[12px] border border-[var(--line-lt-strong)] py-[12px] px-[16px] rounded-[6px] hover:border-gold hover:shadow-[0_4px_14px_rgba(201,162,39,0.15)] transition-all cursor-pointer bg-[#fdfdfd] text-left outline-none focus:border-gold group"
              >
                <Icon
                  size={24}
                  style={{ color: tech.color }}
                  className="shrink-0 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                />
                <span className="font-mono text-[0.85rem] text-[#222] font-medium leading-tight">
                  {tech.name}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-[42px] text-slate-lt max-w-[60ch]">
          Standard, widely-used tools on purpose — any developer you bring on
          later can pick up the project without a translation period. Click any
          tool above to see why we chose it.
        </p>
      </div>

      {/* Blog-style Modal Overlay */}
      {activeTech && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-[16px] md:p-[48px] bg-ink/60 backdrop-blur-md animate-[fadeIn_0.2s_ease-out] overflow-y-auto"
          onClick={() => setActiveTech(null)}
        >
          <div
            className="bg-paper border border-[var(--line-lt-strong)] rounded-[12px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] max-w-[700px] w-full relative animate-[slideUp_0.3s_ease-out] overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveTech(null)}
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
      )}
    </section>
  );
}
