/** @format */

import HeroSection from "./HeroSection";
import { projects } from "@/data/projectsData";
import { CardProject, CallToActionCard } from "@/components";

import StandOutSection from "./StandOutSection";

const Home = () => {
  return (
    <>
      <main className="min-h-screen pt-20 px-4 md:p-16 lg:p-24">
        <HeroSection />

        {/* Projects  */}
        <div className="my-32 max-w-4xl mx-auto">
          <div className="border-b-2 mb-8 pb-6 flex flex-col sm:flex-row sm:gap-0 sm:items-center gap-6 sm:justify-between">
            <h1 className="sm:text-5xl text-4xl  text-start">Projects</h1>

            <CallToActionCard pageLink="projects" titleOfPage="All Projects" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.slice(0, 6).map((project, index) => (
              <CardProject key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Stand Out Section  */}
        <div className="my-32 max-w-4xl mx-auto">
          <div className="border-b-2 mb-8 pb-6 ">
            <h1 className="sm:text-4xl text-3xl text-center">
              What Sets Me Apart from the Crowd
            </h1>
          </div>

          <StandOutSection />
        </div>

        {/* Resume Section  */}
        <div className="my-32 max-w-4xl mx-auto">
        <div className="border-b-2 mb-8 pb-6 ">
            <h1 className="sm:text-4xl text-3xl text-center">
              Resume 📑
            </h1>
          </div>
            <CallToActionCard
              pageLink="Resume"
              iconOfAction="📑"
              titleOfPage="📑 Resume"
            />
        </div>
      </main>
    </>
  );
};

export default Home;
