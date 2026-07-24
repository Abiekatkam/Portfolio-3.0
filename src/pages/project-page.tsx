import BorderCard from "../components/views/border-card";
import AnimatedText from "../components/views/animated-text";
import Footer from "../components/views/footer";
import PreFooter from "../components/views/pre-footer";
import { NavigationPages, projectsList } from "../lib/constants";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ProjectListProps } from "../lib/types";
import PageNavigation from "../components/views/page-navigation";

const ProjectPage = () => {
  return (
    <div className="p-4 md:p-10">
      <div className="max-w-7xl">
        <div className="mb-10 w-full">
          <h1 className="text-4xl font-bold font-Bricolage-Grotesque mb-1">
            <AnimatedText className="font-bold">
              Production Engineering
            </AnimatedText>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            A selection of production systems I've contributed to, spanning
            backend architecture, AI-driven applications, cloud-native services,
            and enterprise software. These projects demonstrate my approach to
            building reliable, maintainable, and scalable solutions.
          </p>
        </div>
      </div>
      <div>
        {projectsList.map((project, index) => (
          <BorderCard key={project.id}>
            <ProjectAccordion project={project} index={index + 1} />
          </BorderCard>
        ))}
      </div>
      <PageNavigation previous={NavigationPages[1]} next={NavigationPages[3]} />
      <PreFooter />
      <Footer />
    </div>
  );
};

interface ProjectAccordionProps {
  project: ProjectListProps;
  index: number;
}

function ProjectAccordion({ project, index }: ProjectAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between pb-7 text-left"
      >
        <div>
          <p className="text-2xl font-semibold font-Bricolage-Grotesque uppercase -tracking-[0.015em] text-neutral-500">
            {String(index).padStart(2, "0")}
          </p>

          <h2 className="mt-2 font-Bricolage-Grotesque text-2xl font-bold">
            {project.title}
          </h2>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
            <span>{project.category}</span>

            {project.duration && (
              <>
                <span>•</span>
                <span>{project.duration}</span>
              </>
            )}

            {project.featured && (
              <>
                <span>•</span>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  Featured
                </span>
              </>
            )}
          </div>
        </div>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Accordion */}
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-8 border-t px-4 py-8">
            {/* Overview */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Overview</h3>

              <p className="leading-7 text-neutral-600 dark:text-neutral-400">
                {project.overview}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Technologies</h3>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contributions */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Key Contributions</h3>

              <ul className="list-disc space-y-2 pl-5 text-neutral-600 dark:text-neutral-400">
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div>
              <h3 className="mb-3 text-lg font-semibold">Impact</h3>

              <ul className="list-disc space-y-2 pl-5 text-neutral-600 dark:text-neutral-400">
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectPage;
