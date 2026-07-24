import type { BlogPost, EducationProps, WorkProps } from "./types";

export const FIRSTNAME_DISPLAY: string = "Abhishek";
export const FULLNAME_DISPLAY: string = "Abhishek Katkam";
export const MAILTO_EMAILADDRESS: string = "mailto:abhishekkatkam30@gmail.com"; //"mailto:your-emailaddress@gmail.com"
export const EMAILADDRESS: string = "abhishekkatkam30@gmail.com"; //"mailto:your-emailaddress@gmail.com"

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
      "Architected scalable microservices-based applications using Node.js, ASP.NET Core, Redis, and BullMQ for asynchronous processing and modular backend workflows. Designed and executed AI-powered RAG pipelines and LLM-integrated chat systems enabling contextual search and workflow automation. Built real-time communication systems using WebSockets and event-driven architecture for live dashboards and chat-based applications. Optimized PostgreSQL queries, Redis caching layers, and background job queues improving API performance and backend throughput. Improved and deployed cloud-native services on AWS and Supabase with focus on scalability, fault tolerance, and deployment consistency using Docker.",

    company: {
      name: "Prudence Analytics & Software Solution",
      website: "https://konnectinsights.com/",
    },

    projects: [
      {
        name: "AI-Powered RAG & Workflow Automation Platform",
        description:
          "Designed contextual search systems using Retrieval-Augmented Generation (RAG), LLM integrations, Redis caching, BullMQ job queues, and AWS infrastructure to automate workflows and improve operational efficiency.",
        started: "May 2025",
        active: true,
      },
    ],

    images: [
      "https://res.cloudinary.com/dxfq3iotg/image/upload/v1697040867/portfolio/konnect-insights/konnect-insights-1.png",
      "https://res.cloudinary.com/dxfq3iotg/image/upload/v1697040867/portfolio/konnect-insights/konnect-insights-2.png",
    ],
  },

  {
    position: "Software Developer",
    in: "2024-04-01",
    out: "2025-04-01",
    description:
      "Enhanced AI-assisted chat query workflows reducing manual campaign configuration effort and improving operational efficiency. Built reusable frontend modules using React.js and Next.js with optimized state management using Redux and Zustand. Developed scalable backend services using Node.js, Redis, and BullMQ for asynchronous task processing and queue-based workflows. Improved cloud deployment reliability and backend availability through AWS infrastructure enhancements and CI/CD workflows.",

    company: {
      name: "Prudence Analytics & Software Solution",
      website: "https://konnectinsights.com/",
    },

    projects: [
      {
        name: "Campaign Automation & AI Chat Assistant",
        description:
          "Enhanced AI-assisted campaign management workflows by developing intelligent chat-based systems, reusable frontend modules, and scalable backend services for asynchronous processing.",
        started: "May 2024",
        ended: "May 2025",
        active: false,
      },
    ],
  },

  {
    position: "Junior Software Developer",
    in: "2023-04-01",
    out: "2024-04-01",
    description:
      "Improved SQL stored procedures and backend query execution for large-scale reporting and analytics workflows. Migrated legacy ASPX modules to modern React.js and Node.js architecture with JWT-based authentication. Developed integrations with external APIs including Meta and Twitter to improve data aggregation workflows. Built AI-driven sentiment analysis modules using Python and ASP.NET MVC for analytics dashboard insights.",

    company: {
      name: "Prudence Analytics & Software Solution",
      website: "https://konnectinsights.com/",
    },

    projects: [
      {
        name: "Sentiment Analytics Platform",
        description:
          "Developed AI-powered sentiment analysis modules using Python and ASP.NET MVC while integrating external platforms such as Meta and Twitter to enhance analytics and reporting capabilities.",
        started: "May 2023",
        ended: "May 2024",
        active: false,
      },
      {
        name: "Sentiment Analytics Platform",
        description:
          "Developed AI-powered sentiment analysis modules using Python and ASP.NET MVC while integrating external platforms such as Meta and Twitter to enhance analytics and reporting capabilities.",
        started: "May 2023",
        ended: "May 2024",
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
    id: "stripe-selective-test-execution",
    title: "Selective Test Execution at Stripe: Fast CI for a 50M-line Ruby monorepo",
    description:
      "How Stripe's Selective Test Execution system runs only about 5% of its test suite on average, keeping CI fast across a 50-million-line Ruby monorepo with over 100,000 test files.",
    url: "https://stripe.dev/blog/selective-test-execution-at-stripe-fast-ci-for-a-50m-line-ruby-monorepo",
    coverImage: "https://stripe.dev/dev_social.jpeg",
    author: "Aditya Anchuri",
    source: "Stripe Dot Dev Blog",
    publishedAt: "2026-04-09",
    readTime: "8 min read",
  },
  {
    id: "cloudflare-precursor",
    title: "Introducing Precursor: detecting agentic behavior with continuous client-side signals",
    description:
      "Cloudflare's new continuous behavioral validation engine for bot management gives visibility into how humans and bots actually behave across an entire session, not just at a single checkpoint.",
    url: "https://blog.cloudflare.com/introducing-precursor/",
    coverImage:
      "https://cf-assets.www.cloudflare.com/zkvhlag99gkb/4raPYKDa5ifslzx2izHKzA/4935a3d9476c0551f0d8f398663b2b9d/Introducing_Precursor-_detecting_agentic_behavior_with_continuous_client-side_signals-OG.png",
    author: "Marina Elmore & Benedikt Wolters",
    source: "The Cloudflare Blog",
    publishedAt: "2026-07-13",
    readTime: "7 min read",
  },
  {
    id: "cupofjo-weekend-recap",
    title: "What Did You Do This Weekend?",
    description:
      "A personal weekend recap from Cup of Jo's founder — a rainy Brooklyn magic shop, watching England play in the World Cup, and a running invitation for readers to share their own weekends in the comments.",
    url: "https://cupofjo.com/2026/07/20/england-world-cup-weekend-recap/",
    coverImage:
      "https://cupofjo.com/wp-content/uploads/2026/07/IMG_2028-scaled-1.jpeg",
    author: "Joanna Goddard",
    source: "Cup of Jo",
    publishedAt: "2026-07-20",
    readTime: "3 min read",
  },
  {
    id: "hbr-pause-before-acting-on-feedback",
    title: "Leaders, Consider Pausing Before Acting on Employee Feedback",
    description:
      "A new study finds that when leaders change their behavior too quickly in response to employee feedback, it can come across as insincere. Gradual, well-communicated change reads as more authentic and keeps people willing to speak up in the future.",
    url: "https://hbr.org/2026/02/leaders-pause-before-acting-on-employee-feedback",
    coverImage:
      "https://hbr.org/resources/images/article_assets/2026/02/Feb26_20_EliotWyatt.jpg",
    author: "Danbee Chon & Francis J. Flynn",
    source: "Harvard Business Review",
    publishedAt: "2026-02-20",
    readTime: "6 min read",
  },
];
