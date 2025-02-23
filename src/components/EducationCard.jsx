/** @format */


import { ChevronRight } from "lucide-react";

const EducationCard = ({ experience }) => {
  return (
    <>
    
      <hr></hr>
      <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex-shrink-0 flex justify-center items-center sm:flex-none sm:justify-normal sm:items-start">
        <div className="sm:w-20 sm:h-20 w-48 h-48 rounded bg-zinc-800 flex items-center justify-center">
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="sm:w-16 sm:h-16 w-44 h-44"
          />
        </div>
      </div>


        <div>
          <div className="flex items-baseline space-x-2 sm:text-xl text-lg flex-col sm:flex-row">
            <h3>{experience.role} </h3>
            <h3>
              {" "}
              {"@ "}{" "}
              <span className="text-orange-500 font-bold">
                {experience.company}
              </span>{" "}
            </h3>
          </div>

          <p className="text-sm font-mono sm:pl-0 pl-2 text-zinc-800 dark:text-gray-400 mb-4">
            {experience.startDate} -{" "}
            <span
              className={
                experience.endDate === "PRESENT"
                  ? "text-orange-500 font-semibold"
                  : ""
              }
            >
              {experience.endDate}<br></br>
              {experience.grade} 
            </span>
          </p>

          <ul className="space-y-2 sm:pl-0 pl-2">
            {experience.description.map((des, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="text-orange-500 w-6 h-6 mr-2" />
                {des}
              </li>
            ))}
          </ul>
        </div>

        
      </div>
    </>
  );
};

export default EducationCard;
