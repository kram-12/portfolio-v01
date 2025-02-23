/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import {
  Experience,
  About,
  Projects,
  Home,
  EducationPage,
  SingleProjectShowCase,
} from "@pages/index";

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        {/* Define MainLayout as a parent route */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<EducationPage />} />
          {/* Single Project Page */}
          <Route
            path="project/:projectId"
            element={<SingleProjectShowCase />}
          />{" "}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
