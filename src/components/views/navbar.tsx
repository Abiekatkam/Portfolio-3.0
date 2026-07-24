import { Home, FileText, ChevronDown, BookOpen, Briefcase } from "lucide-react";
import { cn } from "../../lib/utils";
import { Separator } from "../ui/separator";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import {
  GITHUB_URL,
  GITHUB_USERNAME,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
  TWITTER_URL,
  TWITTER_USERNAME,
} from "../../lib/constants";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ResumeButton from "./resume-button";

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sections = [
    { label: "Home", path: "/", icon: Home },
    { label: "About", path: "/about", icon: FileText },
    { label: "Projects", path: "/project", icon: Briefcase },
    { label: "Blogs", path: "/blog", icon: BookOpen },
  ];

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
  ];

  const currentSection = sections.find((s) => s.path === location.pathname);
  const CurrentIcon = currentSection?.icon || Home;

  return (
    <div className="relative z-100 flex justify-center px-4">
      <nav className="flex items-center justify-center gap-2 md:gap-4 px-3 md:px-4 py-2 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm transition-all duration-300">
        {/* Dropdown Section */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-2 md:px-3 py-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <CurrentIcon
              size={18}
              className="text-zinc-700 dark:text-zinc-300"
            />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hidden md:inline">
              {currentSection?.label || "Navigate"}
            </span>
            <ChevronDown
              size={16}
              className={cn(
                "text-zinc-700 dark:text-zinc-300 transition-transform hidden md:block",
                isDropdownOpen && "rotate-180",
              )}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full mt-2 w-48 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg z-100">
              {sections.map((section) => {
                const SectionIcon = section.icon;
                return (
                  <Link
                    key={section.label}
                    to={section.path}
                    onClick={() => setIsDropdownOpen(false)}
                    className={cn(
                      "flex items-center gap-3 w-full px-4 py-2 text-sm transition-colors",
                      location.pathname === section.path
                        ? "bg-zinc-100 dark:bg-zinc-800 font-medium text-zinc-900 dark:text-zinc-100"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800",
                    )}
                  >
                    <SectionIcon size={18} />
                    <span>{section.label}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <Separator
          orientation="vertical"
          className="h-6 m-auto md:mx-1 bg-zinc-200 dark:bg-zinc-800 "
        />

        {/* Social Icons Section */}
        <div className="flex items-center gap-3 md:gap-4 px-1 md:px-2">
          {social_links.map((link) => (
            <Link
              to={link.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
                <link.icon size={18} className="text-zinc-700 dark:text-zinc-300" />
            </Link>
          ))}
        </div>

        <Separator
          orientation="vertical"
          className="h-6 m-auto md:mx-1 bg-zinc-200 dark:bg-zinc-800"
        />

        {/* Action Section */}
        <div className="flex items-center gap-2 md:gap-4">
          <AnimatedThemeToggler />
          <ResumeButton isFileIconVisible={false} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
