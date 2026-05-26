import ErrorPage from "../../pages/error-page";
import AboutPage from "../../pages/about-page";
import BlogPage from "../../pages/blog-page";
import HomePage from "../../pages/home-page";
import ProjectPage from "../../pages/project-page";
import { Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
