import { Mail, User, Zap } from "lucide-react";
import {
  AvatarMe,
  handGif,
  discord,
  dribble,
  dribbleIcon,
  pinterest,
  tiktok,
  snapchat,
  facebook,
  spotify,
  twitter,
  youtube,
  nextjsIcon,
  tailwindIcon,
  zodIcon,
  fastapiIcon,
  openaiIcon,
  langchainIcon,
  n8nIcon,
  botpressIcon,
  mastraIcon,
  perplexityIcon,

  dockerIcon,
  vercelIcon,
  
  briefcaseIconley,
  vortexLogo,
  pixelworksLogo,
  athonLogo,
  stackIcon,
  figmaIcon,
  notionIcon,
  webflowIcon,
  framerIcon,
  slackIcon,
  asanaIcon,
  rightArrow,
  zapIcon,
  webDesignIcon,
  webDevIcon,
  graphicDesignIcon,
  seoOptIcon,
  project_1,
  project_2,
  project_3,
  project_4,
  flyIcon,
  linkIcon,
  starLig,
  client_1,
  client_2,
  client_3,
  client_4,
  XLogo,
  locationIcon,
  calendarIcon,
  emailIcon,
  questionMarkIcon,
  multiplyIcon,
  instagramIcon,
  linkedInIcon,
} from "@/app/assets/assets";

import { Github, Instagram } from 'lucide-react'

import { counterListsType, FAQ, FollowerData, myExperienceTypes, myServicesPlansTypes, myServicesTypes, myShowCasesTypes, myStackTypes, socialBrandsTypes, testimonialsTypes } from "@/types";
import { socialListsTypes } from '@/types'
import { pagesListsType } from "@/types";

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "Services",
    href: "/services",
    icon: <Zap />,
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: 'Instagram',
    icon: <Instagram size={22} />,
    link: 'https://www.instagram.com/abdul_wasea89/'
  },
  {
    id: 2,
    title: 'Github',
    icon: <Github size={22} />,
    link: 'https://github.com/abdulwasea89'
  },
  {
    id: 3,
    title: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
      </svg>
    ),
    link: 'https://x.com/AiveonAi'
  }
]

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: "Discord",
    icon: discord,
    link: "https://discord.com",
  },
  {
    id: 2,
    name: "Dribbble",
    icon: dribble,
    link: "https://dribbble.com",
  },
  {
    id: 3,
    name: "Facebook",
    icon: facebook,
    link: "https://facebook.com",
  },
  {
    id: 4,
    name: "Pinterest",
    icon: pinterest,
    link: "https://pinterest.com",
  },
  {
    id: 5,
    name: "SnapChat",
    icon: snapchat,
    link: "https://snapchat.com",
  },
  {
    id: 6,
    name: "Spotify",
    icon: spotify,
    link: "https://open.spotify.com",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Happy Clients",
    value: 2,
  },
  {
    id: 2,
    title: "Year of Experience",
    value: 2,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: 50,
  },
  {
    id: 4,
    title: "Awards Received",
    value: 7,
  },
];

export const myExperience: myExperienceTypes[] = [
{
  "id": 1,
  "year": "Nov 2023 - Present",
  "title": "Freelance Full Stack Developer & AI Agent Developer",
  "company": "Self-Employed",
  "label": "Freelancer",
  "description": "Freelance AI Agent & Website Developer specializing in building intelligent, scalable solutions. Experienced in developing custom AI agents using LLMs and automation frameworks, as well as creating responsive, high-performance web applications with modern frontend (React, Next.js) and backend (FastAPI) technologies. Skilled in integrating AI capabilities into web platforms to enhance automation, personalization, and user experience. Proficient in Python, JavaScript, OpenAI Agents SDK, N8N, Botpress, Mastra (AI Agent Fromework), LangChain, LangGraph, and RESTful API integration, delivering high-quality projects to international clients on time and to specification.",
  "link": "",
  "logo": "pixelworksLogo"
}

]
export const myStack: myStackTypes[] = [
  { id: 1, title: "Figma", description: "Interface Design Tool", logo: figmaIcon, link: "https://www.figma.com" },
  { id: 2, title: "Notion", description: "Productivity Tool", logo: notionIcon, link: "https://www.notion.so" },
  { id: 3, title: "Slack", description: "Productivity Tool", logo: slackIcon, link: "https://slack.com" },
  { id: 4, title: "Next.js", description: "React Framework for SSR & SSG", logo: nextjsIcon, link: "https://nextjs.org" },
  { id: 5, title: "Tailwind CSS", description: "Utility-first CSS Framework", logo: tailwindIcon, link: "https://tailwindcss.com" },
  { id: 6, title: "Zod", description: "TypeScript-first Schema Validation", logo: zodIcon, link: "https://github.com/colinhacks/zod" },
  { id: 7, title: "FastAPI", description: "Python Backend Framework", logo: fastapiIcon, link: "https://fastapi.tiangolo.com/" },
  { id: 8, title: "OpenAI SDK / Agents", description: "AI Integration & Automation", logo: openaiIcon, link: "https://platform.openai.com/" },
  { id: 9, title: "LangChain", description: "LLM & AI Agent Framework", logo: langchainIcon, link: "https://www.langchain.com" },
  { id: 10, title: "n8n", description: "Automation & Workflow Tool", logo: n8nIcon, link: "https://n8n.io" },
  { id: 11, title: "Botpress", description: "Conversational AI Platform", logo: botpressIcon, link: "https://botpress.com" },
  { id: 12, title: "Mastra", description: "AI Agent Framework", logo: mastraIcon, link: "https://www.mastra.ai" },
  { id: 13, title: "Perplexity AI", description: "AI-Powered Answer Engine", logo: perplexityIcon, link: "https://www.perplexity.ai" },
  { id: 15, title: "Docker", description: "Containerization Platform", logo: dockerIcon, link: "https://www.docker.com" },
  { id: 16, title: "Vercel", description: "Frontend Hosting / Deployment", logo: vercelIcon, link: "https://vercel.com" },
]
export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'Developing scalable web applications with Next.js and React for dynamic frontends, powered by FastAPI and Prisma for reliable backends and optimized databases, delivering responsive, high-performance results.',
    link: '/services'
  },
  {
    id: 2,
    title: 'AI Agent Solutions',
    description: 'Creating intelligent AI agents using LangChain, CrewAI, and OpenAI Agents SDK for automated decision-making and execution, providing efficient, adaptive solutions tailored to meet complex and evolving business objectives.',
    link: '/services'
  },
  {
    id: 3,
    title: 'Workflow Automation',
    description: 'Automating workflows with n8n by integrating AI and custom processes to increase productivity and minimize manual work, specializing in scalable solutions that optimize social media and business process operations effectively.',
    link: '/services'
  },
  {
    id: 4,
    title: 'AI Integration',
    description: 'Integrating AI capabilities including chatbots, vector databases, and custom features to enhance digital infrastructure, improving scalability, efficiency, and user experience for forward-thinking, high-performance businesses.',
    link: '/services'
  }
];

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: 'Blog Agent',
    description: 'Multi-agent AI system built with crewAI to collaborate effectively on complex tasks.',
    link: 'https://github.com/abdulwasea89/Blog-Agent',
    type: 'AI Project',
    theme: 'Dark',
  },
  {
    id: 2,
    title: 'Study Quiz',
    description: 'Learn AI agents interactively and test your knowledge with quizzes and MCP exercises.',
    link: 'https://github.com/abdulwasea89/Study-quiz',
    type: 'Learning Tool',
    theme: 'Light',

  },
  {
    id: 3,
    title: 'Travel Planner AI',
    description: 'AI-powered travel planner generating personalized itineraries using Google Gemini and LangChain.',
    link: 'https://github.com/abdulwasea89/Travel-Planner',
    type: 'AI Agent',
    theme: 'Dark',

  },
  {
    id: 4,
    title: 'Awesome LLM Apps',
    description: 'Curated collection of LLM apps with AI Agents, RAG, Multi-agent Teams, MCP & open-source models.',
    link: 'https://github.com/abdulwasea89/awesome-ai-agents-and-agentic-ai-apps',
    type: 'Repository',
    theme: 'Light',
  },
  {
    id: 5,
    title: 'Claude Code Free',
    description: 'Install and configure Claude Code CLI, Anthropic’s AI coding assistant for macOS, Linux, and Windows.',
    link: 'https://github.com/abdulwasea89/Claude-Code-Free',
    type: 'AI Tool',
    theme: 'Dark',

  },
  {
    id: 6,
    title: 'AI News Crew',
    description: 'Multi-agent AI system for news aggregation and analysis powered by crewAI framework.',
    link: 'https://github.com/abdulwasea89/News-Agent',
    type: 'AI Project',
    theme: 'Light',
  },
  {
    id: 7,
    title: 'Sales AI Agent',
    description: 'Virtual sales agent using LangGraph, Streamlit & Gemini Flash for personalized customer interactions.',
    link: 'https://github.com/abdulwasea89/sales-ai-agent-langgraph',
    type: 'AI Agent',
    theme: 'Dark',
  },
  {
    id: 8,
    title: 'First Portfolio',
    description: 'My first personal portfolio showcasing projects and skills.',
    link: 'https://abdulwasea.vercel.app/',
    type: 'Portfolio',
    theme: 'Light',
  },
  {
    id: 9,
    title: 'Second Portfolio',
    description: 'My second portfolio project highlighting web development and AI works.',
    link: 'https://abdulwasay.vercel.app/',
    type: 'Portfolio',
    theme: 'Dark',
  },
  {
    id: 10,
    title: 'Gemini ChatBot',
    description: 'ChatBot using Next.js, server actions, Google Gemini Pro, and Clerk authentication.',
    link: 'https://chat-bot-ai-gemini.vercel.app/',
    type: 'AI ChatBot',
    theme: 'Light',

  },
  {
    id: 11,
    title: 'Bits-0f-C0de',
    description: 'Personal blog built with Next.js and Tailwind CSS, rendering markdown files with dark mode support.',
    link: 'https://bit-ten.vercel.app/',
    type: 'Blog',
    theme: 'Dark',

  },
  {
    id: 12,
    title: 'Metavesus',
    description: 'Modern metaverse landing page showcasing Web3.0 features.',
    link: 'https://metavesus.vercel.app/',
    type: 'Web3 App',
    theme: 'Light',

  },
  {
    id: 13,
    title: 'Flair E-commerce',
    description: 'E-commerce application built with modern web technologies and clean UI/UX design.',
    link: 'https://flair1.vercel.app/',
    type: 'E-commerce',
    theme: 'Dark',

  },
  {
    id: 14,
    title: 'Node.js Projects',
    description: 'Collection of Node.js CLI projects including calculator, quiz, ATM simulator, and more.',
    link: 'https://github.com/awrgb/Node-Projects',
    type: 'CLI Tools',
    theme: 'Light',

  },
  {
    id: 15,
    title: 'TTS Agent',
    description: 'Text-to-speech agent powered by LangGraph for AI-powered speech synthesis.',
    link: 'https://github.com/awrgb/TTS-AGENT',
    type: 'AI Tool',
    theme: 'Dark',

  }
];

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    description: 'I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...',
    location: 'New York City, USA.',
    avatar: client_1,
  },
  {
    id: 2,
    name: 'John Anderson',
    description: 'Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.',
    location: 'Sydney, Australia.',
    avatar: client_2,
  },
  {
    id: 3,
    name: 'Mark Davis',
    description: 'Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform.',
    location: 'London, UK.',
    avatar: client_3,
  },
  {
    id: 4,
    name: 'Laura Adams',
    description: 'Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.',
    location: 'Madrid, Spain.',
    avatar: client_4,
  }
]

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: 'Full Stack Website Development',
    description: 'Building modern web applications with Next.js, React, TypeScript, and Prisma. Specializing in FastAPI backend development, REST APIs, and database integration for scalable solutions.',
    experience: '2+',
    icon: webDevIcon,
  },
  {
    id: 2,
    service: 'AI Agent Development',
    description: 'Creating intelligent AI agents using LangChain, CrewAI, Mastra, LangGraph, AGNO, and OpenAI Agents SDK. Specializing in multi-agent systems and autonomous task automation.',
    experience: '2+',
    icon: webDesignIcon,
  },
  {
    id: 3,
    service: 'AI Automation',
    description: 'Implementing AI-powered automation with n8n, Botpress, and vector databases. Specializing in social media automation, productivity apps, and business process optimization.',
    experience: '2+',
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: 'Web Development',
    description: 'Developing modern websites with clean code and optimal performance. Specializing in responsive design, SEO optimization, and seamless user experiences.',
    experience: '2+',
    icon: seoOptIcon,
  }
];

export const faqData: FAQ[] = [
  {
    question: "What technologies do you use for full-stack development?",
    answer: "I specialize in modern web technologies including Next.js, React, and TypeScript for frontend development, along with FastAPI and Prisma for backend and database management. This stack ensures high-performance, scalable applications with excellent developer experience and maintainability.",
  },
  {
    question: "What kind of AI agents can you develop?",
    answer: "I develop various types of AI agents using cutting-edge frameworks like LangChain, CrewAI, Mastra, LangGraph, AGNO, and OpenAI Agents SDK. These can include autonomous task agents, multi-agent systems, chatbots, automation agents, and custom AI solutions tailored to your specific needs.",
  },
  {
    question: "How can AI automation benefit my business?",
    answer: "AI automation can streamline your workflows, reduce manual tasks, and improve efficiency. Using tools like n8n, Botpress, and vector databases, I can automate social media management, customer service, data processing, and create custom productivity applications tailored to your business needs.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, I offer comprehensive support and maintenance services for both web applications and AI systems. This includes regular updates, performance optimization, security patches, and continuous improvements to keep your systems running efficiently.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer: "I maintain clear communication throughout the project using video calls, email, and project management tools. You'll receive regular updates on progress, milestones, and any important decisions. I also encourage feedback and questions to ensure the final product meets your expectations.",
  },
  {
    question: "Can you integrate AI features into existing websites?",
    answer: "Absolutely! I can integrate AI capabilities into your existing website or application. This could include chatbots, content generation, automated workflows, recommendation systems, or custom AI features specific to your business needs.",
  },
  {
    question: "What's your development process?",
    answer: "My development process is iterative and collaborative. It starts with understanding your requirements, followed by planning and architecture design. I use agile methodologies, providing regular demos and updates, and incorporate feedback throughout the development cycle to ensure the final product aligns with your vision.",
  },
  {
    question: "What are your payment terms?",
    answer: "Payment terms are project-based and typically structured with an initial deposit and milestone payments. I provide clear pricing based on project scope and requirements, ensuring transparency throughout our collaboration.",
  },
];

export const followerData: FollowerData[] = [
  {
    platform: "twitter",
    followers: "",
    url: 'https://x.com/AiveonAi',
    icon: XLogo,
  },
  {
    platform: "Instagram",
    followers: "",
    url: 'https://www.instagram.com/abdul_wasea89/',
    icon: instagramIcon,
  },
  {
    platform: "LinkedIn",
    followers: "",
    url: "https://www.linkedin.com/in/abdul-wasea-a8a08737a/",
    icon: linkedInIcon,
  },
];