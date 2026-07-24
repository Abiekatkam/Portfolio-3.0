import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NavigationItem {
  title: string;
  description: string;
  href: string;
}

interface PageNavigationProps {
  previous?: NavigationItem;
  next?: NavigationItem;
}

const PageNavigation = ({ previous, next }: PageNavigationProps) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
      {previous ? (
        <Link
          to={previous.href}
          className="group p-8 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <ArrowLeft size={16} />
            <span>Previous</span>
          </div>

          <h2 className="mt-6 text-2xl font-bold font-Bricolage-Grotesque">
            {previous.title}
          </h2>

          <p className="mt-3 max-w-md text-neutral-600 dark:text-neutral-400">
            {previous.description}
          </p>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={next.href}
          className="group p-8 text-right transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          <div className="flex items-center justify-end gap-2 text-sm text-neutral-500">
            <span>Next</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold font-Bricolage-Grotesque">
            {next.title}
          </h2>

          <p className="mt-3 ml-auto max-w-md text-neutral-600 dark:text-neutral-400">
            {next.description}
          </p>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default PageNavigation;
