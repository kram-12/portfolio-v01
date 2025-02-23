/** @format */

import HeroHomeIcon from "@assets/images/pfp.jpg";
import { adminName } from "@/data/adminData";
import { introHomePage } from "@/data/adminDesc";

const HeroSection = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 items-center gap-0">
        {/* Hero Section */}
        <div className="space-y-6 col-span-2 text-start ">
          <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold">
            Hey, I am <span className="text-orange-500">{adminName}</span>
          </h1>
          <p className="dark:text-gray-300 text-[16px]  md:text-xl leading-relaxed ">
            {introHomePage}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-fit h-fit lg:w-96 lg:h-96 mx-auto flex gap-2 flex-col items-center justify-center">
        <img 
            src={HeroHomeIcon} 
            alt="Kalyanram Poonamalli"
            className="object-cover transform scale-[0.6]"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
