import CAT_IMAGE from "../../assets/pre-footer-cat-3.png";
import { HiOutlineSparkles } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

import { Badge } from "../ui/badge";
import {
  EMAILADDRESS,
  GITHUB_URL,
  GITHUB_USERNAME,
  INSTAGRAM_URL,
  INSTAGRAM_USERNAME,
  LINKEDIN_URL,
  LINKEDIN_USERNAME,
  MAILTO_EMAILADDRESS,
  TWITTER_URL,
  TWITTER_USERNAME,
} from "../../lib/constants";

const PreFooter = () => {
  return (
    <div className="max-w-7xl w-full relative py-12 px-4 sm:px-8 md:px-16 sm:h-70 flex flex-col justify-center my-10 sm:my-20">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-zinc-50 dark:bg-zinc-900 rounded-xl"
      >
        <img
          src={CAT_IMAGE}
          alt="cat img"
          className="absolute bottom-0 inset-0 h-full w-full rounded-lg object-cover object-center brightness-[0.6]"
        />
      </span>
      <h1 className="relative z-10 font-Bricolage-Grotesque text-3xl sm:text-5xl tracking-tighter leading-none mb-6 flex items-center gap-2">
        Thanks for watching!
        <HiOutlineSparkles />
      </h1>

      <div className="sm:max-w-lg flex flex-wrap flex-col sm:flex-row gap-4">
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
        <Link
          to={MAILTO_EMAILADDRESS}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Badge
            variant="secondary"
            className="bg-[#e8f5e9] text-[#2e7d32] border-none px-5 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 w-fit "
          >
            <MdOutlineMailOutline className="" />
            {EMAILADDRESS}
          </Badge>
        </Link>
        <Link to={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <Badge
            variant="secondary"
            className="bg-[#e8f5e9] text-[#2e7d32] border-none px-5 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 w-fit capitalize"
          >
            <FaGithub />
            {GITHUB_USERNAME}
          </Badge>
        </Link>
        <Link to={TWITTER_URL} target="_blank" rel="noopener noreferrer">
          <Badge
            variant="secondary"
            className="bg-[#e8f5e9] text-[#2e7d32] border-none px-5 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 w-fit capitalize"
          >
            <FaXTwitter />
            {TWITTER_USERNAME}
          </Badge>
        </Link>
        <Link to={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <Badge
            variant="secondary"
            className="bg-[#e8f5e9] text-[#2e7d32] border-none px-5 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 w-fit capitalize"
          >
            <FaLinkedinIn />
            {LINKEDIN_USERNAME}
          </Badge>
        </Link>
        <Link to={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <Badge
            variant="secondary"
            className="bg-[#e8f5e9] text-[#2e7d32] border-none px-5 py-3.5 rounded-full text-sm font-medium flex items-center gap-2 w-fit capitalize"
          >
            <FaInstagram />

            {INSTAGRAM_USERNAME}
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default PreFooter;
