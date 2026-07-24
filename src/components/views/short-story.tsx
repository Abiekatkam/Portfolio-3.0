import BorderCard from "./border-card";
import PolaroidGallery from "./pollaroid-gallery";
import {
  GITHUB_URL,
  GITHUB_USERNAME,
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
  TWITTER_URL,
  TWITTER_USERNAME,
} from "../../lib/constants";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ResumeButton from "./resume-button";

const ShortStory = () => {
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

  return (
    <BorderCard>
      <div className="relative sm:py-10 py-8 flex w-full flex-col items-start justify-center">
        <div className="w-full flex items-center justify-center gap-2 mb-5">
          <h1 className="font-Bricolage-Grotesque font-bold w-fit text-3xl sm:text-4xl tracking-tighter leading-none">
            My Story
          </h1>
        </div>

        <p className="max-w-2xl mx-auto sm:text-lg dark:text-zinc-500 text-zinc-700 leading-relaxed font-medium text-center">
          Over the past few years, I’ve been building modern web applications
          focused on performance, scalability, and user experience. From
          crafting responsive frontend interfaces to developing backend systems
          and APIs, I enjoy transforming ideas into polished digital products
          using modern technologies like React, Next.js, TypeScript, Node.js,
          and cloud-based tools.
        </p>

        <PolaroidGallery />

        <p className="max-w-2xl mx-auto sm:mt-16 mt-10 text-center sm:text-lg dark:text-zinc-500 text-zinc-700 leading-relaxed font-medium">
          I’m deeply passionate about technology, design systems, AI tools, and
          developer ecosystems. I enjoy exploring emerging technologies,
          experimenting with new frameworks, and constantly improving my
          understanding of product engineering, motion design, and scalable
          architecture. Beyond coding, I’m someone who genuinely enjoys being
          part of the tech community and learning every day.
        </p>

        <p className="max-w-2xl mx-auto mt-10 text-center sm:text-lg dark:text-zinc-500 text-zinc-700 leading-relaxed font-medium">
          Currently, I’m open to exciting opportunities where I can contribute
          to impactful products, collaborate with ambitious teams, and continue
          growing as a developer. Whether it’s frontend engineering, full-stack
          development, or building innovative user experiences, I’m always
          excited to work on meaningful digital experiences.
        </p>

        <div className="mt-8 max-w-2xl flex items-center mx-auto w-full">
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
          <ResumeButton className="ml-auto" />
        </div>
      </div>
    </BorderCard>
  );
};

export default ShortStory;
