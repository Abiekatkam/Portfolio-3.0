import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";

type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description?: string;
  username?: string;
  url?: string;
  tags?: string[];
};

type FeatureCardProps = React.ComponentProps<"a"> & {
  feature: FeatureType;
  isLink?: boolean;
};

export function FeatureCard({
  feature,
  className,
  isLink = true,
  ...props
}: FeatureCardProps) {
  const p = genRandomPattern();

  const content = (
    <>
      {/* Background Pattern */}
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="fill-foreground/5 stroke-foreground/20 absolute inset-0 h-full w-full"
          />
        </div>
      </div>

      {/* Icon */}
      <feature.icon
        className="relative z-10 size-6 text-foreground/80"
        strokeWidth={1.5}
      />

      {/* Platform */}
      <div className="relative z-10 mt-8 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{feature.title}</h3>

        {isLink && (
          <ArrowUpRight
            size={18}
            className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        )}
      </div>

      {/* Description */}
      {feature.description && (
        <p className="relative z-10 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {feature.description}
        </p>
      )}

      {/* Username */}
      {feature.username && (
        <p className="relative z-10 mt-5 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          @{feature.username}
        </p>
      )}

      {/* Tags */}
      {feature.tags && (
        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {feature.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );

  const commonClassName = cn(
    "group relative overflow-hidden p-6 transition-colors",
    isLink && "hover:bg-neutral-50 dark:hover:bg-neutral-900 cursor-pointer",
    className
  );

  if (!isLink) {
    return <div className={commonClassName}>{content}</div>;
  }

  return (
    <Link
      to={feature.url ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className={commonClassName}
      {...props}
    >
      {content}
    </Link>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#${patternId})`}
        strokeWidth={0}
      />

      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              key={index}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
              strokeWidth={0}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genRandomPattern(length = 5): number[][] {
  return Array.from({ length }, () => [
    Math.floor(Math.random() * 4) + 7,
    Math.floor(Math.random() * 6) + 1,
  ]);
}