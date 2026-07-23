import { GitHubCalendar } from "react-github-calendar";

export default function GithubContributions() {
  return (
    <div className="w-full sm:overflow-hidden flex justify-center">
      <div className="sm:scale-85 sm:origin-top w-full sm:w-fit">
        <GitHubCalendar
          username="AbieKatkam"
          blockSize={15}
          blockMargin={5}
          fontSize={10}
          year={new Date().getFullYear()}
        />
      </div>
    </div>
  );
}
