import BorderCard from "./border-card";
import GithubContributions from "./github-contribution-graph";
import { Zap, Cpu, Sparkles } from "lucide-react";
import { FeatureCard } from "../views/feature-card";
import { EXERCISM_URL, EXERCISM_USERNAME, HACKERANK_URL, HACKERANK_USERNAME, LEETCODE_URL, LEETCODE_USERNAME } from "../../lib/constants";
import AnimatedContainer from "./animated-container";

const features = [
  {
    title: "LeetCode",
    icon: Zap,
    username: LEETCODE_USERNAME,
    url: LEETCODE_URL,
    description: "Data Structures & Algorithms",
  },
  {
    title: "Exercism",
    icon: Cpu,
    username: EXERCISM_USERNAME,
    url: EXERCISM_URL,
    description: "Programming Practice",
  },
  {
    title: "HackerRank",
    icon: Sparkles,
    username: HACKERANK_USERNAME,
    url: HACKERANK_URL,
    description: "Coding Challenges",
  },
];

const FeaturedActivities = () => {
  return (
    <BorderCard>
      <div className="sm:py-10 py-8">
        <h1 className="text-center font-Bricolage-Grotesque font-bold text-3xl sm:text-4xl tracking-tight">
          Featured Activities
        </h1>

        <div className="mt-10">
          <GithubContributions />
        </div>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto gap-2"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </BorderCard>
  );
};

export default FeaturedActivities;
