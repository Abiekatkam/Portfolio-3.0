import KnowledgeBase from "../components/views/knowledge-base";
import HeroSection from "../components/views/hero-section";
import ShortStory from "../components/views/short-story";
import CallToActions from "../components/views/call-to-action";
import PreFooter from "../components/views/pre-footer";
import Footer from "../components/views/footer";

const HomePage = () => {
  return (
    <div className="p-4 md:p-10">
      <HeroSection />
      <KnowledgeBase />
      {/* Projects */}
      {/* Experience */}
      {/* Education */}
      {/* Git activity */}
      <ShortStory />
      <CallToActions />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default HomePage;
