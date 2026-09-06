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
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export default function Stack() {
  const technologies = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS Deployment", icon: FaAws, color: "#232F3E" },
    { name: "Nginx", icon: SiNginx, color: "#009639" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  ];

  return (
    <section
      className="py-[96px] bg-paper text-ink border-b border-[var(--line-lt)] max-sm:py-16"
      id="stack"
    >
      <div className="wrap">
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
              <div
                key={tech.name}
                className="flex items-center gap-[12px] border border-[var(--line-lt-strong)] py-[12px] px-[16px] rounded-[6px] hover:border-ink transition-colors cursor-default bg-[#fdfdfd]"
              >
                <Icon
                  size={24}
                  style={{ color: tech.color }}
                  className="shrink-0 drop-shadow-sm"
                />
                <span className="font-mono text-[0.85rem] text-[#222] font-medium leading-tight">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-[42px] text-slate-lt max-w-[60ch]">
          Standard, widely-used tools on purpose — any developer you bring on
          later can pick up the project without a translation period.
        </p>
      </div>
    </section>
  );
}
