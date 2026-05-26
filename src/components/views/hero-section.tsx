import { Badge } from "../../components/ui/badge";
import BorderCard from "./border-card";
import PROFILE_PICTURE from "../../assets/profile-pic.png";
import PIXALETED_PROFILE_PICTURE from "../../assets/pixaled-profile-pic.png";

const HeroSection = () => {
  return (
      <BorderCard>
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col space-y-4">
            <div>
              <Badge
                variant="secondary"
                className="bg-[#e8f5e9] text-[#2e7d32] border-none px-5 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 w-fit capitalize"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                </span>
                Open for Work
              </Badge>
            </div>

            <h1 className="font-Bricolage-Grotesque font-bold  text-4xl sm:text-6xl tracking-tighter leading-none">
              Designing Clean <br />
              Experiences With <br />
              Modern Code.
            </h1>

            <p className="max-w-lg sm:text-lg text-zinc-500 leading-relaxed font-medium">
              Hi, I'm Abhishek — a full-stack developer focused on building
              immersive web experiences with clean engineering and intentional
              design. I specialize in modern frontend systems, scalable
              architectures, and high-performance applications using React,
              Next.js, TypeScript, and Node.js.
            </p>

            <div className="flex flex-wrap gap-4 pt-4"></div>
          </div>

          {/* Right Image Container */}
          <div className="relative">
            <div className="relative rounded-[40px] overflow-hidden aspect-square">
              <img
                src={PIXALETED_PROFILE_PICTURE}
                alt="Abhishek's Portrait"
                className="w-full h-full object-contain brightness-110"
              />

              {/* Fluted Glass Slices */}
              {/* <div className="absolute inset-y-0 left-0 w-1/2 flex h-full pointer-events-none">
                <div className="w-1/4 h-full backdrop-blur-[2px] border-r border-white/10"></div>
                <div className="w-1/4 h-full backdrop-blur-[6px] border-r border-white/10"></div>
                <div className="w-1/4 h-full backdrop-blur-md border-r border-white/10"></div>
                <div className="w-1/4 h-full backdrop-blur-[20px] border-r border-white/10"></div>
              </div> */}
            </div>
          </div>
        </div>
      </BorderCard>
  );
};

export default HeroSection;
