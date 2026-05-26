import React from "react";

const BorderCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`relative w-full flex items-center justify-center py-12 px-4 sm:px-8 md:px-16 border border-zinc-200 dark:border-zinc-800 ${className || ""}`}
    >
      <div className="absolute -top-[1px] -left-[1px] w-5 h-4 border-t-2 border-l-2 border-zinc-800 dark:border-zinc-200" />
      <div className="absolute -top-[1px] -right-[1px] w-5 h-4 border-t-2 border-r-2 border-zinc-800 dark:border-zinc-200" />
      <div className="absolute -bottom-[1px] -left-[1px] w-5 h-4 border-b-2 border-l-2 border-zinc-800 dark:border-zinc-200" />
      <div className="absolute -bottom-[1px] -right-[1px] w-5 h-4 border-b-2 border-r-2 border-zinc-800 dark:border-zinc-200" />
      {children}
    </section>
  );
};

export default BorderCard;
