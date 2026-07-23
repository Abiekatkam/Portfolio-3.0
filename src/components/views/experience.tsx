// Experience.tsx
import { workExperience } from "../../lib/constants";
import WorkItem from "./work-item";
import BorderCard from "./border-card";

export function Experience() {
  const sortedWorkList = workExperience.sort(
    (a, b) => new Date(b.in).getTime() - new Date(a.in).getTime(),
  );

  return (
    <BorderCard>
      <div className="relative sm:py-10 py-8 flex w-full flex-col items-start justify-center">
        <div className="w-full flex items-center justify-center gap-2 mb-5">
          <h1 className="font-Bricolage-Grotesque font-bold w-fit text-3xl sm:text-4xl tracking-tighter leading-none">
            Professional Experience
          </h1>
        </div>
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {sortedWorkList.map((work) => (
            <WorkItem work={work} key={`${work.position}-${work.in}`} />
          ))}
        </div>
      </div>
    </BorderCard>
  );
}
