// WorkItem.tsx (Assuming this is where your WorkItem component is)
import { ArrowUpRight, ChevronDown, FileText } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import type { WorkProps, WorksProjectsProps } from "../../lib/types";
import DateDisplay from "../../lib/date";

interface WorkItemProps {
  work: WorkProps;
  onIntersect?: (entry: IntersectionObserverEntry, work: WorkProps) => void;
}

function WorkItem({ work, onIntersect }: WorkItemProps) {
  let inDate = new Date(work.in);
  let outDate = work.out ? new Date(work.out) : new Date();

  inDate.setMonth(inDate.getMonth() + 1);
  if (work.out) outDate.setMonth(outDate.getMonth() + 1);

  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current || !onIntersect) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(entry, work);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    observer.observe(itemRef.current);

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [onIntersect, work]);

  return (
    <div
      ref={itemRef}
      className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-10 py-10"
    >
      {/* LEFT */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold font-Bricolage-Grotesque">
          {work.position}
        </h2>

        {work.company.website ? (
          <a
            href={work.company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-lg underline underline-offset-2 hover:no-underline"
          >
            {work.company.name}

            <ArrowUpRight size={16} />
          </a>
        ) : (
          <p className="text-lg">{work.company.name}</p>
        )}

        <div className="text-xs font-bold text-neutral-500 space-y-1">
          <div>
            <DateDisplay
              dateString={inDate.toISOString()}
              dateFormat="LLL yyyy"
            />

            {" - "}

            {work.out ? (
              <DateDisplay
                dateString={outDate.toISOString()}
                dateFormat="LLL yyyy"
              />
            ) : (
              <span className="text-green-600">Present</span>
            )}
          </div>

          {/* <div>{time}</div> */}
        </div>
      </div>

      {/* RIGHT */}
      <div className="space-y-6">
        <span className="font-semibold uppercase text-xs text-neutral-500 dark:text-neutral-300 block">
          Description
        </span>
        <div className="text-neutral-600 dark:text-neutral-400 leading-7">
          {work.description}
        </div>

        {work?.projects?.length > 0 && (
          <>
            <span className="font-semibold uppercase text-xs text-neutral-500 dark:text-neutral-300 block">
              Projects
            </span>

            <div className="space-y-4">
              {work.projects.map((project, index) => (
                <ProjectAccordion
                  key={`${project.name}-${index}`}
                  project={project}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ProjectAccordion({ project }: { project: WorksProjectsProps }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left cursor-pointer bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
          <FileText size={18} />
          <h3 className="text-sm font-semibold ">{project.name}</h3>

          {project.active && (
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
              Active
            </span>
          )}
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 space-y-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>

            {(project.started || project.ended) && (
              <div className="text-xs text-neutral-500">
                {project.started}
                {project.started && " → "}
                {project.active ? "Present" : project.ended}
              </div>
            )}

            {project.images?.length ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.images.map((img) => (
                  <img
                    key={img}
                    src={img}
                    alt={project.name}
                    className="rounded-lg border object-cover w-full h-32"
                  />
                ))}
              </div>
            ) : null}

            {project.links?.length ? (
              <div className="flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkItem; 