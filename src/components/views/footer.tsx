const Footer = () => {
  return (
    <div className="max-w-7xl w-full relative py-12 px-4 sm:px-8 md:px-16 h-70 flex flex-col justify-end">
      <div
        className="bg-gradient-to-b font-Bricolage-Grotesque from-foreground/20 via-foreground/10 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
        style={{
          fontSize: "clamp(3rem, 21vw, 45rem)",
          maxWidth: "100vw",
        }}
      >
        {"ABHISHEK".toUpperCase()}
      </div>

      <div className="relative bottom-0 flex items-center justify-between w-full flex-col sm:flex-row gap-4">
        <p className="text-center text-xs font-black text-zinc-500">
          &copy; {new Date().getFullYear()} Abhishek. All rights reserved.
        </p>

        <p className="text-center text-xs font-black text-zinc-500 mt-2">
            Made with ❤️ by Abhishek using React, Tailwind CSS, and deployed on Vercel.
        </p>
      </div>
    </div>
  );
};

export default Footer;
