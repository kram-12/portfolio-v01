/** @format */

import { AllSocialMedia } from "@/data/adminData";
import { ChevronRight } from "lucide-react";

const SocialMediaList = () => {
  return (
    <>
      <div className=" space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 pl-4">
        <ul className="grid sm:grid-cols-3 grid-cols-2 space-y-1">
          {AllSocialMedia.filter((social) => social.isEnable).map((social) => (
            <li key={social.name}>
              <a
                href={social.url}
                className=" flex gap-1 font-semibold dark:text-indigo-500/80 text-indigo-700"
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                <ChevronRight className="w-4 h-6 text-orange-500" />
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialMediaList;
