/** @format */

import {
  GitHubLogo,
  LinkedInLogo,
  DiscordLogo,
  GmailLogo,
} from "@/assets/images";
const adminName = "Kalyanram Poonamalli";

const AllSocialMedia = [
  {
    name: "GitHub",
    logo: GitHubLogo,
    isEnable: true,
    url: "https://github.com/kram-12",
  },
  {
    name: "LinkedIn",
    logo: LinkedInLogo,
    isEnable: true,
    url: "https://www.linkedin.com/in/kalyanram-poonamalli-a35261259/",
  },
  {
    name: "Discord",
    logo: DiscordLogo,
    isEnable: true,
    url: "https://discord.com/users/1064293681923891241",
  },
  {
    name: "Gmail",
    logo: GmailLogo,
    isEnable: true,
    url: "mailto:kalyanram.p.12@gmail.com",
  }
];

const SocialLinks = {
  githubLink: "https://github.com/kram-12",
  linkedInLink: "https://www.linkedin.com/in/kalyanram-poonamalli-a35261259/",
  discordLink: "https://discord.com/users/1064293681923891241",
  gmailLink: "mailto:kalyanram.p.12@gmail.com"
};

const WhatIamDoingNow = {
  lastUpdate: "February 22, 2025",
  list: [
    "Enhancing my resume to showcase skills and experiences effectively",
    "Advancing my expertise in the MERN stack for full-stack development",
    "Preparing for upcoming placement opportunities",
    "Actively seeking internship opportunities to gain industry experience",
    "Learning the Japanese language to expand my global perspective",
  ],
};


const ToolBox = {
  tagline: "Tools & Technologies That Power My Craft",

  ToolList: {
    Technologies: [
      {
        name: "Programming Languages",
        list: ["C", "C++","Python", "JavaScript", "C#", "Java"],
      },
      {
        name: "Frameworks",
        list: ["React.js", "Node.js", "Express.js", "Next.js", "FastAPI"],
      },
      {
        name: "Database Technologies",
        list: ["MySQL", "PostgreSQL", "MongoDB"],
      },
    ],

    Tools: [
      {
        name: "Version Control",
        list: ["Git", "GitHub"],
      },
      {
        name: "IDEs/Editors",
        list: ["VS Code", "PyCharm", "Jupyter Notebook"],
      },
      {
        name: "Design Tools",
        list: ["Figma", "Canva"],
      },
      {
        name: "Project Management",
        list: ["Notion"],
      },
    ],

    Platforms: [
      {
        name: "Competitive Coding",
        list: ["Codeforces", "LeetCode", "CodeChef"],
      },
    ],
  },
};

const MyHobbies = [
  {
    name: "Playing Games 🎮",
    message:
      "Pressing buttons, saving worlds, and pretending I’m the main character—because why not? 😆✨",
  },

  {
    name: "Watching Anime & Movies 🍿",
    message:
      "Laughing, crying, and gasping at plot twists—sometimes all at once! 🎭💖",
  },

  {
    name: "Stargazing ✨",
    message:
      "Wishing on stars, talking to the moon, and mapping out future adventures! 🌙🚀",
  },

  {
    name: "Reading 📚",
    message:
      "Falling in love with fictional characters and collecting books faster than I can read them. 📖💫",
  },
];

export {
  AllSocialMedia,
  WhatIamDoingNow,
  ToolBox,
  MyHobbies,
  SocialLinks,
  adminName,
};
