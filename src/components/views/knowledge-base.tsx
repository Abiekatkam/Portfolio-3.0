import BorderCard from "./border-card";
import {
  CSS3Icon,
  HTML5Icon,
  LinuxIcon,
  ReactIcon,
  NextIcon,
  TypescriptIcon,
  JavascriptIcon,
  NodeIcon,
  ExpressIcon,
  PythonIcon,
  TailwindcssIcon,
  DockerIcon,
  AWSIcon,
  HerokuIcon,
  GraphQLIcon,
} from "../icons";

const skills = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextIcon },
  { name: "TypeScript", icon: TypescriptIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "Node.js", icon: NodeIcon },
  { name: "Express", icon: ExpressIcon },
  { name: "Python", icon: PythonIcon },
  { name: "Tailwind CSS", icon: TailwindcssIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "AWS", icon: AWSIcon },
  { name: "GraphQL", icon: GraphQLIcon },
  { name: "HTML5", icon: HTML5Icon },
  { name: "CSS3", icon: CSS3Icon },
  { name: "Linux", icon: LinuxIcon },
  { name: "Heroku", icon: HerokuIcon },
];

const KnowledgeBase = () => {
  return (
    <BorderCard>
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-2">
          <h1 className="font-Bricolage-Grotesque font-bold w-fit text-3xl sm:text-4xl tracking-tighter leading-none">
            Knowledge Base
          </h1>
        </div>
        <div className="mt-6 flex items-center justify-center flex-wrap gap-2">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-2 transition-all hover:scale-105 group text-neutral-600 dark:text-neutral-400 hover:text-[#2e7d32] dark:hover:text-[#2e7d32] hover:bg-[#e8f5e9] dark:hover:bg-[#e8f5e9] cursor-pointer group hover:border-[#e8f5e9] dark:hover:border-[#e8f5e9]"
              >
                <Icon className="size-4 grayscale group-hover:grayscale-0" />

                <span className="text-xs sm:text-sm font-medium">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </BorderCard>
  );
};

export default KnowledgeBase;
