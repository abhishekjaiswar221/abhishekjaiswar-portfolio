import {
  BookImage,
  CodeXml,
  Github,
  Home,
  Linkedin,
  SquareTerminal,
  Twitter,
  UserRound,
} from "lucide-react";
import {
  DesktopNavLinksType,
  MobileNavLinksType,
  MobileSocialNavLinksType,
} from "./dataTypes";

export const mobileNavLinks: Array<MobileNavLinksType> = [
  { path: "/", name: "Home", icon: <Home size={22} strokeWidth={1.5} /> },
  {
    path: "/about",
    name: "About",
    icon: <BookImage size={22} strokeWidth={1.5} />,
  },
  {
    path: "#skills",
    name: "Skills",
    icon: <SquareTerminal size={22} strokeWidth={1.5} />,
  },
  {
    path: "/projects",
    name: "More Projects",
    icon: <CodeXml size={22} strokeWidth={1.5} />,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <UserRound size={22} strokeWidth={1.5} />,
  },
];

export const desktopNavLinks: Array<DesktopNavLinksType> = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "#skills", name: "Skills" },
  { path: "/projects", name: "More Projects" },
];

export const mobileSocialNavLinks: Array<MobileSocialNavLinksType> = [
  {
    path: "https://github.com/abhishekjaiswar221",
    name: "Github",
    icon: <Github className="text-github" size={22} strokeWidth={1.5} />,
  },
  {
    path: "https://linkedin.com/in/abhishekjai221",
    name: "LinkedIn",
    icon: <Linkedin className="text-linkedin" size={22} strokeWidth={1.5} />,
  },
  {
    path: "https://x.com/abhishekjai221",
    name: "Twitter",
    icon: <Twitter className="text-twitter" size={22} strokeWidth={1.5} />,
  },
];
