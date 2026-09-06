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
import { FaAws } from "react-icons/fa";

export const stackData = [
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
