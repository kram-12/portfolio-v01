/** @format */

import feat_dashboard from "@assets/images/projects/portfolio/dashboard.png";


const projects = [
  {
    id: 0,
    title: "Portfolio Website",
    description:
      "This portfolio is a reflection of my passion for technology, coding, and software development, where I present my skills, experience, education, and projects, offering a glimpse into my journey as a full-stack developer, game developer, and tech enthusiast. Here, you'll find an About Me section that introduces my background, interests, and motivations, along with details about my education, highlighting key learnings and achievements. My experience section showcases my professional journey, including internships, leadership roles, and contributions to various projects. I also share my skills and tech stack, covering the tools and technologies I have mastered and continue to explore. Additionally, my projects & creations section features both personal and professional work, demonstrating my expertise in web development and coding. Lastly, if you'd like to connect or collaborate, you can reach out through LinkedIn, GitHub, and other platforms. This website is more than just a portfolio—it's a growing record of my learning, achievements, and future aspirations, so feel free to explore and connect!",
      tags: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "Portfolio",
        "Frontend Development",
      ]
      ,
    githubLink: "https://github.com/kram-12/portfolio-v01",
    // demoLink: "#",
    features: [
      {
        feat: "Portfolio Dashboard",
        imgLink: feat_dashboard,
      },
    ],
  },
  {
    id: 1,
    title: "Rise Beacon - Volunteering Management Platform",
    description:
      "Rise Beacon is a volunteering management platform designed to streamline the coordination between event organizers and volunteers by providing a seamless and efficient system. Built using React, Next.js, and PostgreSQL, the platform enables organizations to create and manage events while allowing volunteers to register, participate, and track their contributions. To ensure secure access, Web3Auth was integrated for authentication, and for legitimacy verification, the system initially explored AI-based GPS image validation before transitioning to a Google Maps API-based manual verification method. A reward system and leaderboard were implemented to encourage active participation, allowing volunteers to earn points for their contributions. The database was migrated to PostgreSQL for better scalability and performance, ensuring a smooth and reliable experience for all users.",
    tags: [
      "JavsScript",
      "React",
      "Next.js",
      "GeminiAI",
      "PostgreSQL",
      "Web3Auth",
      "Google Maps API",
    ],
    githubLink: "https://github.com/kram-12/rise-beacon",
    // demoLink: "",
    features: [
      {
        feat: "Website Snapshot",
        imgLink: feat_dashboard,
      },
    ],
  },
  {
    id: 2,
    title: "FitQuest - Fitness Tracker",
    description:
      "FitQuest - Fitness Tracker is a React-based web application designed to help users track, manage, and analyze their workout routines, making fitness monitoring effortless. The app supports CRUD operations, allowing users to create, edit, delete, and search workouts seamlessly. It features fitness analysis tools to visualize key insights like calories burned, workout duration, and top performances. Built with React Router for smooth navigation and styled with Bootstrap, FitQuest offers a responsive and user-friendly interface. Authentication is implemented with hard-coded login and signup pages, ensuring secure access. The backend is powered by a JSON Web Server, with Axios handling HTTP requests, making data retrieval efficient and reliable.",
      tags: [
        "JavaScript",
        "React",
        "React Router DOM",
        "Bootstrap",
        "Axios",
        "JSON Server",
      ],      
    githubLink: "https://github.com/kram-12/fitquest",
    // demoLink: "",
    features: [
      {
        feat: "Website Snapshot",
        imgLink: feat_dashboard,
      },
    ],
  },
  {
    id: 3,
    title: "Assess 360˚ - Examination Portal",
    description:
      "Assess 360˚ is an Online Examination Management Portal designed to revolutionize the exam process by offering a robust, efficient, and user-friendly platform. The system streamlines exam creation, scheduling, and management, reducing administrative workload and enhancing accessibility by allowing students to take exams from anywhere with an internet connection. To ensure accuracy and efficiency, automated grading minimizes errors and delays, while stringent security measures maintain the confidentiality and integrity of exam content and results. With an intuitive interface for both administrators and examinees, Assess 360˚ enhances engagement, flexibility, and overall effectiveness in the examination process.",
      tags: [
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
        "JavaScript",
        "Xampp",
      ],      
    githubLink: "https://github.com/kram-12/assess-360",
    // demoLink: "#",
    features: [
      {
        feat: "Website Snapshot",
        imgLink: feat_dashboard,
      },
    ],
  },
  {
    id: 4,
    title: "Tweet Sentiment Analysis",
    description:
      "Tweet Sentiment Analysis project leverages machine learning to analyze sentiment in tweets using the Sentiment140 dataset, which contains 1.6 million labeled tweets (positive or negative). The project involves text preprocessing, including cleaning text, removing stopwords, and stemming, to enhance model accuracy. A Logistic Regression classifier is trained to predict sentiment, achieving an accuracy of 79.87% on training data and 77.66% on test data. The model is saved as strained_model.sav, making it reusable for future sentiment analysis tasks. This project demonstrates the application of NLP techniques in real-world sentiment detection.",
    tags: [
      "Python",
      "Machine Learning",
      "Natural Language Processing",
      "Logistic Regression",
      "Sentiment Analysis",
      "Scikit-Learn",
      "Pandas",
      "NLTK",
    ],
    githubLink: "https://github.com/kram-12/tweet-sentiment-analysis",
    // demoLink: "#",
    features: [],
  },
  {
    id: 5,
    title: "Text Twister - Command Line Game",
    description:
      "Text Twister is a word-solving game that challenges players to unscramble jumbled words using stack (LIFO) and queue (FIFO) operations. Players must strategically move letters between a stack and a queue to form the correct word, enhancing both logical thinking and data structure understanding. The game includes various operations such as pushing, popping, enqueuing, and dequeuing letters, along with options to reset the game and verify correctness. With each level, players refine their problem-solving skills while gaining a deeper grasp of stack and queue mechanics in an engaging and interactive way.",
      tags: [
        "C",
        "Data Structures",
        "Stack",
        "Queue",
        "Algorithmic Thinking",
        "Problem-Solving",
      ],
    githubLink: "https://github.com/kram-12/TextTwister",
    // demoLink: "",
    features: [],
  },
  {
    id: 6,
    title: "Shinji Hirako - Character Profile",
    description:
      "This project is a web-based character profile page dedicated to Shinji Hirako from the anime Bleach, offering an interactive experience inspired by his ability, 'Sakasama no Sekai' (Inverted World). Users can explore Shinji’s background, abilities, and character details, while engaging with a unique visual effect that inverts the content at the press of a button. The page features responsive design, immersive background visuals, audio effects, and dynamic button interactions, enhancing user engagement. With its blend of aesthetics and interactivity, the project brings Shinji’s persona and abilities to life in a creative web format.",
    tags:[
      "HTML",
      "CSS",
      "JavaScript",
      "Audio Integration",
    ],
    githubLink: "https://github.com/kram-12/bleach-characters",
    demoLink: "bleach-character.netlify.app/",
    features: [
      {
        feat: "Website Snapshot",
        imgLink: feat_dashboard,
      },
    ],
  },
  {
    id: 7,
    title: "Game Character Design",
    description:
      "This project focuses on developing a sophisticated object-oriented programming (OOP) framework in C++, designed for creating and managing simulation systems across domains like robotics, environmental modeling, and game development. Leveraging key OOP principles such as class hierarchy, inheritance, polymorphism, encapsulation, and abstraction, the framework ensures a structured, scalable, and maintainable architecture. It incorporates dynamic memory management with smart pointers to enhance stability and prevent memory leaks. The Standard Template Library (STL) plays a crucial role in optimizing data structures and algorithms, ensuring code efficiency and reusability. Additionally, the framework integrates randomization techniques and optimized control structures to introduce dynamic scenarios and realistic behaviors, making simulations more adaptable and lifelike. With its modular and extensible design, this project empowers developers to build complex, flexible, and high-performance simulation systems while maintaining code integrity and efficiency.",
    tags: [
      "C++",
      "Object-Oriented Programming",
      "Smart Pointers",
      "Polymorphism",
      "STL (Standard Template Library)",
      "Dynamic Memory Allocation",
      "Simulation Systems",
      "Algorithm Optimization",
    ],
    githubLink: "https://github.com/kram-12/Game-Character-Design",
    // demoLink: "",
    features: [],
  },
  {
    id: 8,
    title: "Valentine's Day-themed Web Project",
    description:
      "This Valentine's Day-themed web project offers couples a unique and interactive way to relive their journey together. Featuring a floating gift box, the experience unfolds as users click to unwrap a personalized love story, accompanied by soothing background music and a confetti effect. A beautifully designed Memory Gallery showcases cherished moments, with images enlarging on hover for a more immersive and nostalgic experience. Created for the Valentine’s Day competition organized by the GeeksforGeeks Chapter, this project blends emotion, creativity, and web interactivity to craft a heartfelt digital experience.",
    tags:[
      "HTML",
      "CSS",
      "JavaScript",
      "Audio Integration",
    ],
    githubLink: "https://github.com/kram-12/gfg-valentine-page",
    demoLink: "forever-yours-gfg.netlify.app/",
    features: [
      {
        feat: "Website Snapshot",
        imgLink: feat_dashboard,
      },
    ],
  },
];





const topFiveProjects = [projects[0], projects[2], projects[3]]
const coding = [projects[5], projects[7]]
const ML = [projects[4]]


const typesOfProjects = [
  {
    typeName: "My Top Projects",
    listOf: topFiveProjects
  },
  {
    typeName: "Coding Projects",
    listOf: coding
  },
  {
    typeName: "Machine Learning Projects",
    listOf: ML
  },
  {
    typeName: "Projects Catalog",
    listOf: projects
  }

]


export { projects, topFiveProjects, typesOfProjects };
