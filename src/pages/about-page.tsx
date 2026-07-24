import BorderCard from "../components/views/border-card";
import Footer from "../components/views/footer";
import PreFooter from "../components/views/pre-footer";
import PollaroidProfileImage from "../assets/pollarroid-pic-3.jpeg";
import {
  FULLNAME_DISPLAY,
  MORPHING_HEADLINE,
  NavigationPages,
} from "../lib/constants";
import AnimatedText from "../components/views/animated-text";
import { Link } from "react-router-dom";
import {
  GITHUB_URL,
  GITHUB_USERNAME,
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
  TWITTER_URL,
  TWITTER_USERNAME,
} from "../lib/constants";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import {
  Astroid,
  Brain,
  CloudIcon,
  Database,
  Languages,
  Server,
} from "lucide-react";
import AnimatedContainer from "../components/views/animated-container";
import { FeatureCard } from "../components/views/feature-card";
import { MorphingText } from "../components/views/morphing-text";
import ResumeButton from "../components/views/resume-button";
import PageNavigation from "../components/views/page-navigation";

const AboutPage = () => {
  const social_links = [
    {
      name: "Twitter profile",
      label: TWITTER_USERNAME,
      href: TWITTER_URL,
      icon: FaXTwitter,
    },
    {
      name: "Github profile",
      label: GITHUB_USERNAME,
      href: GITHUB_URL,
      icon: FaGithub,
    },
    {
      name: "LinkedIn profile",
      label: LINKEDIN_USERNAME,
      href: LINKEDIN_URL,
      icon: FaLinkedin,
    },
    {
      name: "Instagram profile",
      label: INSTAGRAM_USERNAME,
      href: INSTAGRAM_URL,
      icon: FaInstagram,
    },
  ];

  const TECH_STACK = [
    {
      title: "Languages",
      icon: Languages,
      tags: ["C#", "JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      title: "Backend",
      icon: Server,
      tags: ["ASP.NET Core", "ASP.NET MVC", "Node.js", "Express.js", "GraphQL"],
    },
    {
      title: "Frontend",
      icon: Astroid,
      tags: ["React", "Next.js", "Redux", "Zustand", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: Database,
      tags: ["PostgreSQL", "SQL Server", "MongoDB", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      icon: CloudIcon,
      tags: ["AWS", "Docker", "Supabase", "Git", "CI/CD"],
    },
    {
      title: "AI",
      icon: Brain,
      tags: [
        "Retrieval-Augmented Generation (RAG)",
        "Ollama",
        "LangChain",
        "Vector Databases",
        "LLM Integrations",
      ],
    },
  ];

  return (
    <div className="p-4 md:p-10">
      <div className="max-w-7xl">
        <div className="mb-10 w-full">
          <h1 className="text-4xl font-bold font-Bricolage-Grotesque mb-1">
            <AnimatedText className="font-bold">Beyond the Resume</AnimatedText>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            More than a list of skills and experiences—this is a glimpse into
            how I think, what I value, and the journey that continues to shape
            me as a software engineer.
          </p>
        </div>
      </div>
      <BorderCard>
        <div className="max-w-7xl w-full flex sm:flex-row flex-col sm:gap-12">
          <div className="flex w-full items-center justify-center flex-col space-y-4">
            <img
              src={PollaroidProfileImage}
              alt="About Me"
              className="aspect-square w-75 h-75 object-cover rounded-4xl"
            />
            <div className="text-center flex gap-2 flex-col items-center justify-center mt-4">
              <h1 className="text-4xl font-bold font-Bricolage-Grotesque mb-1">
                <AnimatedText className="font-bold">
                  {FULLNAME_DISPLAY}
                </AnimatedText>
              </h1>
              <p className="text-sm uppercase dark:text-zinc-400 text-zinc-600 leading-relaxed font-medium">
                Software Engineer <span>•</span> Backend Engineer <span>•</span>{" "}
                AI Enthusiast
              </p>
              <div className="flex items-center gap-3 md:gap-4 px-1 md:px-2">
                {social_links.map((link) => (
                  <Link
                    to={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <link.icon
                      size={18}
                      className="text-zinc-700 dark:text-zinc-300"
                    />
                  </Link>
                ))}
              </div>
              <ResumeButton className="" />
            </div>
          </div>
          <div className="w-full max-w-2xl mx-auto p-4 relative text-balanced *:sm:text-xl dark:text-zinc-500 text-zinc-700 leading-relaxed font-medium space-y-4 text-center sm:text-start">
            <p>
              I'm a Software Engineer with 3+ years of experience building
              full-stack applications, scalable backend systems, and AI-powered
              solutions. I enjoy transforming complex business requirements into
              reliable, maintainable software using modern technologies and
              engineering best practices.
            </p>
            <p>
              My work spans backend development, cloud infrastructure,
              distributed systems, and Retrieval-Augmented Generation (RAG)
              applications. I'm passionate about continuously learning, solving
              challenging problems, and building products that create real
              impact.
            </p>
          </div>
        </div>
      </BorderCard>
      <BorderCard>
        <div className="max-w-7xl w-full sm:gap-12">
          <div className="w-full flex items-center justify-center gap-2">
            <h1 className="font-Bricolage-Grotesque font-bold w-fit text-3xl sm:text-4xl tracking-tighter leading-none">
              Tech Stack
            </h1>
          </div>
          <AnimatedContainer
            delay={0.4}
            className="grid grid-cols-1 divide-x divide-y divide-dashed sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto gap-2 mt-4"
          >
            {TECH_STACK.map((feature, i) => (
              <FeatureCard key={i} feature={feature} isLink={false} />
            ))}
          </AnimatedContainer>
        </div>
      </BorderCard>
      <BorderCard>
        <div className="max-w-7xl w-full sm:gap-12 py-10">
          <MorphingText
            texts={MORPHING_HEADLINE}
            className="md:text-4xl text-xl font-Bricolage-Grotesque mb-8"
          />
          <div className="w-full max-w-2xl mx-auto p-4 relative text-balanced *:sm:text-xl dark:text-zinc-500 text-zinc-700 leading-relaxed font-medium space-y-4 text-center mt-16">
            <p>
              Outside of software engineering, I recharge through movement,
              curiosity, and building for the sake of learning.
            </p>
          </div>
        </div>
      </BorderCard>
      <PageNavigation previous={NavigationPages[0]} next={NavigationPages[2]} />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default AboutPage;
