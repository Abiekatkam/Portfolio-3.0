import type {
  BlogPost,
  EducationProps,
  ProjectListProps,
  WorkProps,
} from "./types";

export const FIRSTNAME_DISPLAY: string = "Abhishek";
export const FULLNAME_DISPLAY: string = "Abhishek Katkam";
export const MAILTO_EMAILADDRESS: string = "mailto:abhishekkatkam30@gmail.com"; //"mailto:your-emailaddress@gmail.com"
export const EMAILADDRESS: string = "abhishekkatkam30@gmail.com";

export const RESUME_PDF_URL: string = "";
export const RESUME_PDF_VIEW_URL: string = "";

export const CURRENT_WORKING_COMPANY_NAME: string = "Konnect Insights";

export const GITHUB_URL: string = "https://github.com/Abiekatkam";
export const GITHUB_REPOSITORIES_URL: string =
  "https://github.com/Abiekatkam?tab=repositories";
export const GITHUB_USERNAME: string = "AbieKatkam";
export const GITHUB_REPOSITORY_URL: string =
  "https://github.com/Abiekatkam/portfolio-3.0";
export const GITHUB_REPOSITORY_NAME: string = "Portfolio 3.0";

export const LINKEDIN_URL: string =
  "https://www.linkedin.com/in/abhishek-katkam/";
export const LINKEDIN_USERNAME: string = "Abhishek Katkam";

export const INSTAGRAM_URL: string = "https://www.instagram.com/_abie._/";
export const INSTAGRAM_USERNAME: string = "_abie._";

export const TWITTER_URL: string = "https://x.com/AbhishekKatkam9";
export const TWITTER_USERNAME: string = "@AbhishekKatkam9";

export const REDDIT_URL: string = "/";
export const REDDIT_USERNAME: string = "/";

export const FACEBOOK_URL: string = "/";
export const FACEBOOK_USERNAME: string = "/";

export const DISCORD_URL: string = "/";
export const DISCORD_USERNAME: string = "Abie Katkam";

export const LEETCODE_URL: string = "https://leetcode.com/u/Abiekat/";
export const LEETCODE_USERNAME: string = "Abiekat";

export const EXERCISM_URL: string = "https://exercism.org/profiles/Abiekatkam";
export const EXERCISM_USERNAME: string = "Abiekat";

export const GFG_URL: string = "https://auth.geeksforgeeks.org/user/Abiekat";
export const GFG_USERNAME: string = "Abiekat";

export const HACKERANK_URL: string =
  "https://www.hackerrank.com/profile/abhishekkatkam30";
export const HACKERANK_USERNAME: string = "abhishekkatkam30";

export const workExperience: WorkProps[] = [
  {
    position: "Software Engineer",
    in: "2025-04-01",
    out: "",
    description:
      "Architected scalable microservices-based applications using Node.js, ASP.NET Core, Redis, and BullMQ for asynchronous processing and modular backend workflows. Designed and implemented AI-powered Retrieval-Augmented Generation (RAG) pipelines, LLM-integrated applications, and cloud-native services while improving backend scalability, performance, and deployment reliability across AWS infrastructure.",

    company: {
      name: "Prudence Analytics & Software Solution",
      website: "https://konnectinsights.com/",
    },

    projects: [
      {
        id: "ai-cxm-platform",
        name: "AI-Powered Customer Experience Platform",
        description:
          "Designed and developed enterprise AI workflows including presentation generation, semantic search, workflow automation, Redis caching, Milvus vector search, and full-stack application development.",
        started: "Apr 2025",
        active: true,
      },
      {
        id: "rag-document-platform",
        name: "RAG Document Intelligence Platform",
        description:
          "Built Retrieval-Augmented Generation (RAG) pipelines enabling enterprise users to search and interact with internal documents using natural language and contextual AI responses.",
        started: "May 2025",
        active: true,
      },
    ],
  },

  {
    position: "Software Developer",
    in: "2024-04-01",
    out: "2025-04-01",
    description:
      "Developed scalable backend services and reusable frontend modules while automating enterprise workflows. Focused on asynchronous processing, cloud deployment, performance optimization, and modern full-stack application development using React, Node.js, Redis, BullMQ, and AWS.",

    company: {
      name: "Prudence Analytics & Software Solution",
      website: "https://konnectinsights.com/",
    },

    projects: [
      {
        id: "media-automation-engine",
        name: "Automated Media Publishing Engine",
        description:
          "Developed queue-based automation services for scheduling and publishing enterprise media content using asynchronous workflows.",
        started: "Apr 2024",
        ended: "Apr 2025",
        active: false,
      },
      {
        id: "enterprise-cms",
        name: "Enterprise Content Management System",
        description:
          "Developed internal CMS modules including dashboards, authentication, role-based access control, and reusable CRUD components for operational workflows.",
        started: "Jul 2024",
        ended: "Apr 2025",
        active: false,
      },
    ],
  },

  {
    position: "Junior Software Developer",
    in: "2023-04-01",
    out: "2024-04-01",
    description:
      "Modernized legacy applications by migrating ASP.NET Web Forms modules to React-based interfaces, improving backend performance through MySQL optimization, integrating external APIs, and contributing to AI-driven analytics features.",

    company: {
      name: "Prudence Analytics & Software Solution",
      website: "https://konnectinsights.com/",
    },

    projects: [
      {
        id: "social-media-publishing",
        name: "Social Media Publishing Platform",
        description:
          "Redesigned the publishing module, optimized MySQL stored procedures, improved backend performance, and enhanced the overall publishing experience.",
        started: "Apr 2023",
        ended: "Apr 2024",
        active: false,
      },
    ],
  },
];

export const educationList: EducationProps[] = [
  {
    degree: "Masters Degree",
    field: "Master of Computer Applications (MCA)",
    institution: "Navinchandra Mehta Institute of Technology and Development",
    location: "Mumbai, Maharashtra, India",
    locationUrl: "https://nmitd.edu.in/",
    in: "2024",
    out: "2026",
    description:
      "Pursuing a Master of Computer Applications (MCA) degree with a focus on software development, data structures, algorithms, and emerging technologies. Engaged in projects involving full-stack development, machine learning, and cloud computing. Actively participating in coding competitions and technical workshops to enhance practical skills and industry readiness.",
    skills: [
      "artificial intelligence",
      "machine learning",
      "statistical analysis",
      "data structures and algorithms",
      "linux operating system",
      "web development",
      "networking",
      "software programming",
    ],
  },
  {
    degree: "Bachelor's Degree",
    field: "Bachelor Science in Information Technology",
    institution:
      "Guru Nanak Khalsa College of Arts, Science & Commerce (Autonomous)",
    location: "Mumbai, Maharashtra, India",
    locationUrl: "https://gnkhalsa.edu.in/",
    in: "2020",
    out: "2023",
    description:
      "Completed a Bachelor's degree in Information Technology with coursework in programming languages, database management, web development, and software engineering principles. Developed foundational skills in software development through academic projects and internships. Gained experience in various programming languages and tools, preparing for a career in the technology industry.",
    skills: [
      "Cyber security",
      "IOT",
      "linux operating system",
      "web development",
      "ui ux development",
      "software programming",
      "software development",
      "networking",
      "data structures and algorithms",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "github-cost-of-saying-yes",
    title: "The cost of saying yes has changed",
    description:
      "The cost of writing code dropped, but the cost of owning it didn't. A framework for figuring out which changes are genuinely cheap to ship in the AI era.",
    url: "https://github.blog/engineering/the-cost-of-saying-yes-has-changed/",
    coverImage:
      "https://github.blog/wp-content/uploads/2025/11/GithubStockIllos_Sketch_ripple.jpg",
    author: "Dalia Abuadas",
    source: "The GitHub Blog",
    publishedAt: "2026-07-17",
    readTime: "6 min read",
  },
  {
    id: "vercel-ship-2026-recap",
    title: "Vercel Ship 2026 recap",
    description:
      "Over 2,500 people gathered in London for Vercel Ship 2026 to build on agentic infrastructure. A full recap of the keynote, new products like Vercel Connect and eve, and every session from the day.",
    url: "https://vercel.com/blog/vercel-ship-2026-recap",
    coverImage:
      "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/1QYTAAT1hR7NJAVlhZa4Ka/c30f439c60db019cfd2b52a1bb3e2ef0/ship-recap-og-ldn.png",
    author: "Eric Dodds",
    source: "Vercel Blog",
    publishedAt: "2026-06-17",
    readTime: "9 min read",
  },
  {
    id: "shopify-generative-recommender",
    title: "The generative recommender behind Shopify's commerce engine",
    description:
      "How Shopify built a foundational generative recommender that reads full buyer-journey sequences instead of simplified signals — covering time-aware attention, negative sampling, and a 7.3x training speedup that shipped measurable lifts in production.",
    url: "https://shopify.engineering/generative-recommendations",
    coverImage:
      "https://cdn.shopify.com/b/shopify-brochure2-assets/5187ead989e126b17ddd855e0a4888ff.png",
    author: "Yang Liu & Ali Khanafer",
    source: "Shopify Engineering",
    publishedAt: "2026-02-25",
    readTime: "7 min read",
  },
  {
    id: "google-gemini-managed-agents-expansion",
    title:
      "Expanding Managed Agents in Gemini API: background tasks, remote MCP and more",
    description:
      "New capabilities for Managed Agents in the Gemini API — long-running background execution, remote MCP server integration, custom function calling alongside sandbox tools, and network credential refresh — for building reliable, production-ready agents.",
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api/",
    coverImage:
      "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Managed_agents_feature_bundle_launch.width-1300.png",
    author: "Philipp Schmid & Mariano Cocirio",
    source: "Google Developers Blog",
    publishedAt: "2026-07-07",
    readTime: "5 min read",
  },
  {
    id: "anthropic-ai-native-sdlc-security",
    title: "How Anthropic secures its AI-native software development lifecycle",
    description:
      "Anthropic's Deputy CISO details how the Security Engineering team hardens a software development lifecycle where Claude authors about 80% of merged code — covering plan, code, CI, deploy, and monitor stages of an AI-native SDLC.",
    url: "https://claude.com/blog/how-anthropic-secures-its-ai-native-software-development-lifecycle",
    coverImage:
      "https://cdn.prod.website-files.com/68a44d4040f98a4adf2207b6/6a5faa4b748d179725b5376e_og_how-anthropic-secures-its-ai-native-software-development-lifecycle.jpg",
    author: "Jason Clinton",
    source: "Claude by Anthropic",
    publishedAt: "2026-07-21",
    readTime: "5 min read",
  },
  {
    id: "stripe-selective-test-execution",
    title:
      "Selective Test Execution at Stripe: Fast CI for a 50M-line Ruby monorepo",
    description:
      "How Stripe's Selective Test Execution system runs only about 5% of its test suite on average, keeping CI fast across a 50-million-line Ruby monorepo with over 100,000 test files.",
    url: "https://stripe.dev/blog/selective-test-execution-at-stripe-fast-ci-for-a-50m-line-ruby-monorepo",
    coverImage: "https://stripe.dev/dev_social.jpeg",
    author: "Aditya Anchuri",
    source: "Stripe Dot Dev Blog",
    publishedAt: "2026-04-09",
    readTime: "8 min read",
  },
];

export const MORPHING_HEADLINE: string[] = [
  "Fuelled by Curiosity",
  "Gym Mode: Activated",
  "Caffeine + Code = Me",
  "Creative by Day, Designer by Passion",
  "Building the Future, One Commit at a Time",
  "Self-Taught, Never Self-Satisfied",
  "Typing My Way Through Innovation",
  "Debugging Life & Code",
  "From Idea to Deployment",
  "Full Stack. Full Passion.",
  "Pixels, Logic & Gains",
  "Lifting Reps & React Components",
  "Dreaming in Code",
  "Turning Concepts into Code",
];

export const projectsList: ProjectListProps[] = [
  {
    id: "ai-cxm-platform",
    title: "AI-Powered Customer Experience Platform",
    category: "AI • Full Stack • Enterprise Platform",
    duration: "2025 - Present",
    featured: true,

    overview:
      "Designed and developed an enterprise AI-powered Customer Experience Management platform that streamlines business workflows through intelligent content generation, conversational AI, document processing, and modern user experiences.",

    contributions: [
      "Designed and implemented responsive frontend interfaces using React.",
      "Developed scalable backend APIs using ASP.NET Core and Node.js.",
      "Integrated Gamma API for automated presentation generation.",
      "Built AI-assisted workflow automation modules.",
      "Implemented Redis caching for improved application performance.",
      "Worked with Milvus vector database for semantic search capabilities.",
      "Developed dynamic rich UI generation components.",
      "Integrated multiple LLM-powered workflows.",
      "Collaborated across frontend, backend, and AI teams throughout the project lifecycle.",
    ],

    technologies: [
      "React",
      "ASP.NET Core",
      "Node.js",
      "Redis",
      "Milvus",
      "LLMs",
      "Gamma API",
      "MySql Server",
      "Docker",
      "AWS",
      "Hugging Face APIs",
    ],

    impact: [
      "Automated business workflows using AI.",
      "Reduced manual presentation creation.",
      "Improved customer engagement through intelligent automation.",
    ],
  },

  {
    id: "rag-document-platform",
    title: "RAG Document Intelligence Platform",
    category: "AI • Retrieval-Augmented Generation",
    duration: "2025 - Present",
    featured: true,

    overview:
      "Built an AI-powered document intelligence platform enabling enterprise users to query internal knowledge bases using natural language through Retrieval-Augmented Generation (RAG).",

    contributions: [
      "Developed document ingestion pipelines.",
      "Implemented document chunking and preprocessing.",
      "Integrated embedding generation workflows.",
      "Built semantic search APIs.",
      "Integrated LLM-based contextual responses.",
      "Implemented Redis caching.",
      "Developed backend APIs.",
      "Integrated PostgreSQL storage.",
    ],

    technologies: [
      "React",
      "ASP.NET Core",
      "Node.js",
      "Redis",
      "MySQL Server",
      "Docker",
      "RAG",
      "LLMs",
      "Python",
      "Vector Search",
    ],

    impact: [
      "Reduced document search time significantly.",
      "Improved internal knowledge accessibility.",
      "Delivered accurate context-aware AI responses.",
    ],
  },

  {
    id: "social-media-publishing",
    title: "Social Media Publishing Platform",
    category: "Full Stack • Performance Optimization",
    duration: "2023 - Present",

    overview:
      "Modernized the organization's social media publishing module by redesigning the user interface, optimizing backend processes, and improving database performance.",

    contributions: [
      "Redesigned the complete publishing module UI.",
      "Improved user experience and usability.",
      "Optimized MySQL stored procedures.",
      "Improved database query performance.",
      "Enhanced API response times.",
      "Resolved multiple legacy performance bottlenecks.",
    ],

    technologies: [
      "React",
      "ASP.NET MVC",
      "MySQL",
      "Stored Procedures",
      "JavaScript",
      "Bootstrap",
      "AWS S3",
    ],

    impact: [
      "Improved publishing workflow efficiency.",
      "Reduced database execution time.",
      "Enhanced overall user experience.",
    ],
  },

  {
    id: "media-automation-engine",
    title: "Automated Media Publishing Engine",
    category: "Backend • Workflow Automation",
    duration: "2024 - 2025",

    overview:
      "Developed an automated publishing engine that schedules and publishes media content for enterprise clients across supported social platforms.",

    contributions: [
      "Built scheduling workflows.",
      "Developed asynchronous processing services.",
      "Implemented queue-based architecture.",
      "Integrated multiple publishing APIs.",
      "Added retry mechanisms for failed jobs.",
      "Improved monitoring and logging.",
    ],

    technologies: [
      "Node.js",
      "Redis",
      "BullMQ",
      "AWS",
      "REST APIs",
      "Express.js",
    ],

    impact: [
      "Reduced manual publishing effort.",
      "Improved publishing reliability.",
      "Automated client media workflows.",
    ],
  },

  {
    id: "enterprise-cms",
    title: "Enterprise Content Management System",
    category: "Internal Platform • Full Stack",
    duration: "2024 - 2025",

    overview:
      "Developed and maintained an internal content management system to simplify operational workflows, improve collaboration, and centralize business operations.",

    contributions: [
      "Developed full-stack modules.",
      "Built secure authentication workflows.",
      "Implemented role-based access control.",
      "Created reusable CRUD modules.",
      "Designed operational dashboards.",
      "Optimized backend APIs.",
    ],

    technologies: ["ASP.NET Core", "React", "MySQL Server", "Redis", "Docker", "Zustand", "Tailwind CSS"],

    impact: [
      "Improved operational efficiency.",
      "Reduced manual administrative work.",
      "Centralized internal business operations.",
    ],
  },
];

export const NavigationPages = [
  {
    href: "/",
    title: "Home",
    description: "Overview of my work, experience, and technical expertise.",
  },
  {
    href: "/about",
    title: "About Me",
    description: "My journey, values, technologies, and interests.",
  },
  {
    href: "/project",
    title: "Production Engineering",
    description:
      "Enterprise platforms, AI systems, and production software I've contributed to.",
  },
  {
    href: "/blog",
    title: "Engineering Insights",
    description:
      "Technical articles, engineering blogs, and industry learnings.",
  },
];