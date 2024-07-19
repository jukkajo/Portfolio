import {
 impulseImage,
  chromecast,
  disc02,
  homeSmile,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  c,
  csharp,
  cplusplus,
  java,
  js,
  matlab,
  python,
  rust,
  typescript,
  dart,
  docker,
  firebase,
  gitlab,
  github,
  mysql,
  postgresql,
  sqlite,
  redis,
  kubernetes,
  flutter,
  deno,
  flask,
  jquery,
  react,
  nodejs,
  qt,
  unity,
  tensorflow,
  pytorch,
  scikitlearn,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "2",
    title: "Not So Fancy Demo",
    url: "#demo-1",
  },
  {
    id: "3",
    title: "Hobbies",
    url: "#work",
  },
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "1",
    title: "Fireman Consortium - Research Assistant ",
    text: "",
    date: "January 2024 (12 Months)",
    status: "On Going",
    imageUrl: roadmap4,
    colorful: true,
  },
  {
    id: "2",
    title: "HSI-Smart Consortium (Contract Extension) - Research Assistant",
    text: [
    {
    major: "Contract extension for HSI-Smart project.",
    heading1: "Key responsibilities:",
    list1: ["Develop denoising toolset (with C, MISRA compliance) to remove noise from spectral and hyperspectral datacubes", "Testing"]
    }
    ],
    date: "October 2023 (4 Months)",
    status: "Ended",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "HSI-Smart Consortium - Research Assistant",
    text: [
    { 
    major: "Research as part of HSI-Smart project, which aimed to develop miniaturized hyperspectral cameras and computational methods for data processing. My contribution to project was to find means to implement existing/pretrained convolution neural network model In C language, according to MISRA stantards.",
    heading1: "Key Responsibilities:",
    list1: ["Data acquisition & pre-processing", "Planning & modeling.", "Programming, (with: C, C++, Python, matlab).", "Testing program's memory and power consumption and accuracyon single-board computer.", "Visualizing findings and drawing conclusions."],
    heading2: "Deliverables:",
    list2:["Accurate C-library and function-call-sequence, to utilize weights and parameters of pretrained CNN, for multiclass classification tasks.",  "Visualizations & documentation."],
    }
    ],
    date: "May 2023 (4 Months)",
    status: "Ended",
    imageUrl: roadmap2,
    colorful: true,
  },

  {
    id: "4",
    title: "Production Worker / Rotomon Oy",
    text: "Various tasks in factory manufactoring pipes.",
    date: "June 2022 (3 Months)",
    status: "Ended",
    imageUrl: roadmap1,
  },
  {
    id: "5",
    title: "Production Worker / Rotomon Oy",
    text: "Various tasks in factory manufactoring pipes.",
    date: "May 2021 (4 Months)",
    status: "Ended",
    imageUrl: roadmap1,
  },
  {
    id: "6",
    title: "Production Worker / Rotomon Oy",
    text: "Various tasks in factory manufactoring pipes.",
    date: "May 2020 (4 Months)",
    status: "Ended",
    imageUrl: roadmap1,
  },
  {
    id: "7",
    title: "Production Worker / Rotomon Oy",
    text: "Various tasks in factory manufactoring pipes.",
    date: "July 2019 (2 Months)",
    status: "Ended",
    imageUrl: roadmap1,
  },
  {
    id: "8",
    title: "Production Worker / Josadoor Oy",
    text: "Various tasks in factory manufactoring doors, door frames and similar.",
    date: "February 2018 (4 Months)",
    status: "Ended",
    imageUrl: roadmap1,
  },
  {
    id: "9",
    title: "Electronic Store Salesperson / Veikon Kone Kanganiemi",
    text: "Selling electronic goods, flexible customer service, updating storage and delivering goods to customers.",
    date: "May 2017 (4 Months)",
    status: "Ended",
    imageUrl: roadmap1,
  },
  {
    id: "10",
    title: "Swimming school's Assintant Teacher ",
    text: "Organizing group activities, games and exercises for group of children.",
    date: "May 2016 (4 Months)",
    status: "Ended",
    imageUrl: roadmap1,
  },
];

export const stackNames = [
    {
      cloudanddbs: "Cloud/DBs"
    },
    {
      databases: "Databases"
    },
    {
      frameworks: "Frameworks"
    },
    {
      ides: "Ides"
    },
    {
      others: "Others"
    },
    {
      languages: "Languages"
    },
    {
      editors: "Text Editors"
    },
];


export const cloudanddbcons = [
  {
    id: "0",
    title: "Docker",
    icon: docker,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "Firebase",
    icon: firebase,
    width: 40,
    height: 36,
  },
  {
    id: "2",
    title: "Gitlab",
    icon: gitlab,
    width: 34,
    height: 36,
  },
  {
    id: "3",
    title: "Github",
    icon: github,
    width: 36,
    height: 28,
  },
  {
    id: "4",
    title: "MySQL",
    icon: mysql,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "PostgreSQL",
    icon: postgresql,
    width: 34,
    hei1ght: 34,
  },
  {
    id: "6",
    title: "SQLite",
    icon: sqlite,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Redis",
    icon: redis,
    width: 38,
    height: 32,
  },
  {
    id: "8",
    title: "Kubernetes",
    icon: kubernetes,
    width: 38,
    height: 32,
  },
];


export const languageIcons = [
  {
    id: "0",
    title: "C",
    icon: c,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "C#",
    icon: csharp,
    width: 40,
    height: 36,
  },
  {
    id: "2",
    title: "C++",
    icon: cplusplus,
    width: 34,
    height: 36,
  },
  {
    id: "3",
    title: "Dart",
    icon: dart,
    width: 36,
    height: 28,
  },
  {
    id: "4",
    title: "JavaScript",
    icon: js,
    width: 34,
    height: 35,
  },
  {
    id: "5",
    title: "Python",
    icon: python,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Rust",
    icon: rust,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Typescript",
    icon: typescript,
    width: 34,
    height: 34,
  },
  {
    id: "8",
    title: "Java",
    icon: java,
    width: 38,
    height: 32,
  },
  {
    id: "9",
    title: "Matlab",
    icon: matlab,
    width: 38,
    height: 32,
  },
];

export const frameworkicons = [
  {
    id: "0",
    title: "flutter",
    icon: flutter,
    width: 36,
    height: 36,
  },
  {
    id: "1",
    title: "deno",
    icon: deno,
    width: 40,
    height: 36,
  },
  {
    id: "2",
    title: "flask",
    icon: flask,
    width: 34,
    height: 36,
  },
  {
    id: "3",
    title: "jquery",
    icon: jquery,
    width: 36,
    height: 28,
  },
  {
    id: "4",
    title: "react",
    icon: react,
    width: 34,
    height: 35,
  },
  {
    id: "5",
    title: "nodejs",
    icon: nodejs,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "qt",
    icon: qt,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "unity",
    icon: unity,
    width: 34,
    height: 34,
  },
  {
    id: "8",
    title: "tensorflow",
    icon: tensorflow,
    width: 38,
    height: 32,
  },
  {
    id: "9",
    title: "pytorch",
    icon: pytorch,
    width: 38,
    height: 32,
  },
  {
    id: "10",
    title: "scikitlearn",
    icon: scikitlearn,
    width: 38,
    height: 32,
  }
];

export const Profile = [
  {
    id: "5",
    tqitle: "Mindset",
    text: "Complex challenges are good antidote against boredom. Via many iterations & discovery of non-working solutions, one's idea can become something useful.",
    backgroundUrl: "./src/assets/info/card-5.svg",
    imageUrl:impulseImage,
  },
  {
    id: "4",
    title: "Major Interests",
    text: ["Mobile-Apps", "Machine-Learning & AI","Data Science & Analytics", "Cybersecurity", "Project Management", "Fullstack"],
    backgroundUrl: "./src/assets/info/card-4.svg",
    imageUrl:impulseImage,
    light: true,
  },
  {
    id: "3",
    title: "Seeking",
    text: "Employment outside of Finland, but nevertheless, interested in any offers.",
    backgroundUrl: "./src/assets/info/card-4.svg",
    imageUrl:impulseImage,
    light: true,
  },
  {
    id: "2",
    title: "Mention Worthy",
    text: "",
    backgroundUrl: "./src/assets/info/card-3.svg",
    imageUrl:impulseImage,
  },
  {
    id: "1",
    title: "Contact Me",
    text: "jajoutzs@jyu.fi",
    text2: "jukkajoutsalainen@gmail.com",
    backgroundUrl: "./src/assets/info/card-6.svg",
    imageUrl:impulseImage,
  },
];
