import KnowledgeBase from "../components/views/knowledge-base";
import HeroSection from "../components/views/hero-section";
import ShortStory from "../components/views/short-story";
import CallToActions from "../components/views/call-to-action";
import PreFooter from "../components/views/pre-footer";
import Footer from "../components/views/footer";
import { Experience } from "../components/views/experience";
import { Education } from "../components/views/education";
import FeaturedActivites from "../components/views/featured-activities";
import PageNavigation from "../components/views/page-navigation";
import { NavigationPages } from "../lib/constants";

const HomePage = () => {
  return (
    <div className="p-4 md:p-10">
      <HeroSection />
      <KnowledgeBase />
      <FeaturedActivites />
      <ShortStory />
      {/* Projects */}
      <Experience />
      <Education />
      <CallToActions />
      <PageNavigation next={NavigationPages[1]} />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default HomePage;
