import EducationNMITDImage from "../assets/NMITD-home-picture.webp";
import EducationGNIKImage from "../assets/GNIKS-hme-picture.webp";
import EducationGNIKLogoImage from "../assets/GNIKS-logo-picture.webp";
import EducationNMITDLogoImage from "../assets/NMITD-logo-picture..png";

import type { EducationProps, MotivationQuote, WorkProps } from "./types";

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

export const HACKERANK_URL: string = "https://www.hackerrank.com/profile/abhishekkatkam30";
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
    location: "Mumbai, Maharashtra",
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
    images: [EducationNMITDLogoImage, EducationNMITDImage],
  },
  {
    degree: "Bachelor's Degree",
    field: "Bachelor Science in Information Technology",
    institution:
      "Guru Nanak Khalsa College of Arts, Science & Commerce (Autonomous)",
    location: "Mumbai, Maharashtra",
    locationUrl: "https://gnkhalsa.edu.in/",
    in: "2020",
    out: "2023",
    description:
      "Completed a Bachelor's degree in Information Technology with coursework in programming languages, database management, web development, and software engineering principles. Developed foundational skills in software development through academic projects and internships. Gained experience in various programming languages and tools, preparing for a career in the technology industry.",
    images: [EducationGNIKLogoImage, EducationGNIKImage],
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
