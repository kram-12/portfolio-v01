/** @format */

import { CardProject } from "@/components";
import {
  projects,
  topFiveProjects,
  typesOfProjects,
} from "@/data/projectsData";

const Projects = () => {
  

  return (
    <>
      <div className="sm:my-32 my-16 max-w-6xl mx-auto p-8 md:p-0">
        <div className="sm:mb-16 ">
        <h2 className="sm:text-5xl text-4xl font-semibold mb-4">
          A Showcase of My Creations ⚒️
        </h2>
        <p className="dark:text-zinc-400 text-zinc-600 sm:text-xl text-lg mb-8">
          This is a collection of projects I have built in my free time to refine my skills and explore new technologies.  
          <br />
          <br />
          To be completely honest - many of these projects were developed as part of my learning journey, allowing me to experiment with different tech stacks while expanding my expertise in web development, coding, etc.
        </p>
        </div>

        <div className=" divide-y-2  ">
          {typesOfProjects.map((oneType, index) => (
            <div key={index} className="pt-20 pb-20">
              <h2 className="sm:text-3xl underline underline-offset-8 mb-8 font-roboto-slab text-2xl font-semibold">
                {oneType["typeName"]}
              </h2>
              <div className="grid gap-6 md:grid-cols-3  lg:gap-8 ">
                {oneType["listOf"].map((project, index) => (
                  <CardProject project={project} key={index} />
                ))}
              </div>
              </div>
          ))}
        </div>



        
      </div>
    </>
  );
};

export default Projects;
