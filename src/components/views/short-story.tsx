import { FileText } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import BorderCard from "./border-card";
import PolaroidGallery from "./pollaroid-gallery";

const ShortStory = () => {
  return (
    <BorderCard>
      <div className="relative sm:py-10 py-8 flex w-full flex-col items-start justify-center">
        <div className="w-full flex items-center justify-center gap-2 mb-5">
          <h1 className="font-Bricolage-Grotesque font-bold w-fit text-3xl sm:text-4xl tracking-tighter leading-none">
            My Story
          </h1>
        </div>

        <p className="max-w-2xl mx-auto sm:text-lg text-zinc-500 leading-relaxed font-medium text-center">
          Over the past few years, I’ve been building modern web applications
          focused on performance, scalability, and user experience. From
          crafting responsive frontend interfaces to developing backend systems
          and APIs, I enjoy transforming ideas into polished digital products
          using modern technologies like React, Next.js, TypeScript, Node.js,
          and cloud-based tools.
        </p>

        <PolaroidGallery />

        <p className="max-w-2xl mx-auto sm:mt-16 mt-10 text-center sm:text-lg text-zinc-500 leading-relaxed font-medium">
          I’m deeply passionate about technology, design systems, AI tools, and
          developer ecosystems. I enjoy exploring emerging technologies,
          experimenting with new frameworks, and constantly improving my
          understanding of product engineering, motion design, and scalable
          architecture. Beyond coding, I’m someone who genuinely enjoys being
          part of the tech community and learning every day.
        </p>

        <p className="max-w-2xl mx-auto mt-10 text-center sm:text-lg text-zinc-500 leading-relaxed font-medium">
          Currently, I’m open to exciting opportunities where I can contribute
          to impactful products, collaborate with ambitious teams, and continue
          growing as a developer. Whether it’s frontend engineering, full-stack
          development, or building innovative user experiences, I’m always
          excited to work on meaningful digital experiences.
        </p>

        <div className="mt-8 max-w-2xl mx-auto w-full">
          <Button
            className={cn(
              "rounded-full font-medium px-4 md:px-6 h-9 md:h-10 text-xs md:text-sm",
              "transition-all active:scale-95 cursor-pointer",
            )}
          >
            View My Resume
            <FileText />
          </Button>
        </div>
      </div>
    </BorderCard>
  );
};

export default ShortStory;
