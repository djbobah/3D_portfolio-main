import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  // },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  //   {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  //   },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Ведущий инженер программист",
    company_name: "Газпром трансгаз Краснодар",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "Январь 2023 - по настоящее время",
    points: [
      "Внутренние приложения для работников компании на клиент-серверной архитектуре для автоматизации работы сотрудников",
      "Вёрстка страниц, модулей, компонентов и виджетов согласно технического задания и дизайн-проекта в Figma",
      "Имплементация бизнес логики согласно ТЗ",
      "Разработка бэкенда",
      "Подключение к бэкенду и получение данных с бэкенда",
      "Участие в проработке ТЗ в той части, как имплементировать бизнес-задачи на фронтенде",
      "Внутреннее тестирование получившейся реализации продукта предварительно, перед передачей в production",
      "Администрирование локальной сети организации",
    ],
  },
  {
    title: "Инженер-программист 1 категории",
    company_name: "Газпром трансгаз Краснодар",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Февраль 2008 - декабрь 2022",
    points: [
      "Внутренние приложения для работников компании на клиент-серверной архитектуре для автоматизации работы сотрудников",
      "Разработка бэкенда",
      "Подключение к бэкенду и получение данных с бэкенда",
      "Участие в проработке ТЗ в той части, как имплементировать бизнес-задачи на фронтенде",
      "Внутреннее тестирование получившейся реализации продукта предварительно, перед передачей в production",
      "Администрирование локальной сети организации",
    ],
  },
  {
    title: "Инженер программист",
    company_name: "ООО Каменскволокно",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Декабрь 2006 - январь 2008",
    points: [
      "Занимался разработкой модулей для 1С Предприятия в помент миграции с версии 1с7.7 на 8.2",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/djbobah",
  },
  //   {
  //     name: "LinkedIn",
  //     iconUrl: linkedin,
  //     link: "https://www.linkedin.com/in/YourLinkedInUsername",
  //   },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
