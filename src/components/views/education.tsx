import BorderCard from "./border-card";
import { educationList } from "../../lib/constants";
import type { EducationProps } from "../../lib/types";
import { ArrowUpRight } from "lucide-react";

function EducationItem({ education }: { education: EducationProps }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] gap-10 py-8 first:pt-0 last:pb-0">
      {/* LEFT */}
      <div className="space-y-3">
        <div>
          <h2 className="text-2xl font-semibold font-Bricolage-Grotesque">
            {education.degree}
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {education.field}
          </p>
        </div>

        <div>
          {education.locationUrl ? (
            <a
              href={education.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 underline underline-offset-2 hover:no-underline"
            >
              <span>{education.institution}</span>

              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span>{education.institution}</span>
          )}
        </div>

        <div className="text-sm text-neutral-500 space-y-1">
          <div>{education.location}</div>

          <div>
            {education.in} - {education.out}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="space-y-6">
        {education.description && (
          <div>
            <span className="font-semibold uppercase text-xs text-neutral-500 dark:text-neutral-300 block mb-4">
              Description
            </span>
            <p className="leading-7 text-neutral-600 dark:text-neutral-400">
              {education.description}
            </p>
          </div>
        )}

        {education.skills && education.skills.length > 0 && (
          <div>
            <span className="font-semibold uppercase text-xs text-neutral-500 dark:text-neutral-300 block mb-4">
              Skills
            </span>

            <div className="flex flex-wrap gap-2">
              {education.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-neutral-100 px-3 py-1 text-sm capitalize text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Education() {
  return (
    <BorderCard>
      <div className="relative sm:py-10 py-8 flex w-full flex-col items-start justify-center">
        <div className="w-full flex items-center justify-center gap-2 mb-5">
          <h1 className="font-Bricolage-Grotesque font-bold w-fit text-3xl sm:text-4xl tracking-tighter leading-none">
            Academic Background
          </h1>
        </div>
        <div className="flex flex-col gap-10 mt-10 w-full divide-y divide-neutral-200 dark:divide-neutral-800">
          {educationList.map((education) => (
            <EducationItem
              key={`${education.degree}-${education.institution}`}
              education={education}
            />
          ))}
        </div>
      </div>
    </BorderCard>
  );
}
