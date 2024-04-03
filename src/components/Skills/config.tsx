import { ReactNode } from "react";
import { FaGithubSquare } from "react-icons/fa";
import {
  FaBootstrap,
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaSass,
  FaYarn,
} from "react-icons/fa6";
import { IoLogoBitbucket } from "react-icons/io5";
import {
  SiJavascript,
  SiMui,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

interface ISkillsTechnologies {
  name: string;
  icon: ReactNode;
}

export const SkillsTechnologies: Array<ISkillsTechnologies> = [
  { name: "React", icon: <FaReact size="100%" /> },
  { name: "TypeScript", icon: <SiTypescript size="100%" /> },
  { name: "JavaScript", icon: <SiJavascript size="100%" /> },
  { name: "HTML5", icon: <FaHtml5 size="100%" /> },
  { name: "Bootstrap", icon: <FaBootstrap size="100%" /> },
  { name: "Material UI", icon: <SiMui size="100%" /> },
  { name: "Sass", icon: <FaSass size="100%" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size="100%" /> },
  { name: "React Router", icon: <SiReactrouter size="100%" /> },
  { name: "Styled Components", icon: <SiStyledcomponents size="100%" /> },
  { name: "React Query", icon: <SiReactquery size="100%" /> },
  { name: "Git", icon: <FaGitAlt size="100%" /> },
  { name: "GitHub", icon: <FaGithubSquare size="100%" /> },
  { name: "BitBucket", icon: <IoLogoBitbucket size="100%" /> },
  { name: "Yarn", icon: <FaYarn size="100%" /> },
  { name: "Vite", icon: <SiVite size="100%" /> },
  { name: "Storybook", icon: <SiStorybook size="100%" /> },
  { name: "Redux", icon: <SiRedux size="100%" /> },
];
