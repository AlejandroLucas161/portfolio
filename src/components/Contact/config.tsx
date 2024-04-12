import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { ReactNode } from "react";
import { MdPhone } from "react-icons/md";

interface ISocialMedia {
  name: string;
  href: string;
  icon: ReactNode;
}

export const SocialMedia: Array<ISocialMedia> = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alejandrolucas161/",
    icon: <FaLinkedinIn color="#333333" size={24} />,
  },
  {
    name: "Github",
    href: "https://github.com/AlejandroLucas161",
    icon: <FiGithub color="#333333" size={24} />,
  },
  {
    name: "Mail",
    href: "mailto:alejandrolucas161@gmail.com",
    icon: <IoIosMail color="#333333" size={24} />,
  },
  {
    name: "Contact",
    href: "https://walink.co/399aac",
    icon: <MdPhone color="#333333" size={24} />,
  },
];
