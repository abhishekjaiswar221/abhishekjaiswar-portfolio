export interface SocialIconsType {
  id: number;
  title: string;
  imgSrc: string;
  altText: string;
  bgColor: string;
  borderColor: string;
  href: string;
}

export const socialIcons: Array<SocialIconsType> = [
  {
    id: 1,
    title: "Github",
    imgSrc: "github.svg",
    altText: "Github Logo",
    bgColor: "bg-github",
    borderColor: "hover:border-github",
    href: "http://github.com/abhishekjaiswar221",
  },
  {
    id: 2,
    title: "LinkedIn",
    imgSrc: "linkedin.svg",
    altText: "LinkedIn Logo",
    bgColor: "bg-linkedin",
    borderColor: "hover:border-linkedin",
    href: "https://linkedin.com/in/abhishekjai221",
  },
  {
    id: 3,
    title: "Twitter",
    imgSrc: "twitter.svg",
    altText: "Twitter Logo",
    bgColor: "bg-twitter",
    borderColor: "hover:border-twitter",
    href: "https://x.com/abhishekjai221",
  },
];

export interface TechIconType {
  id: number;
  title: string;
  imgSrc: string;
  altText: string;
}

export const frontendTechIcons: Array<TechIconType> = [
  {
    id: 1,
    title: "HTML",
    imgSrc: "html5.svg",
    altText: "HTML Logo",
  },
  {
    id: 2,
    title: "CSS",
    imgSrc: "css3.svg",
    altText: "CSS Logo",
  },
  {
    id: 3,
    title: "Sass",
    imgSrc: "sass.svg",
    altText: "Sass Logo",
  },
  {
    id: 4,
    title: "Bootstrap",
    imgSrc: "bootstrap.svg",
    altText: "Bootstrap CSS Logo",
  },
  {
    id: 5,
    title: "Tailwind",
    imgSrc: "tailwindcss.svg",
    altText: "Tailwind CSS Logo",
  },
  {
    id: 6,
    title: "Shadcn/UI",
    imgSrc: "shadcnui.svg",
    altText: "Shadcn/ui Logo",
  },
  {
    id: 7,
    title: "Radix UI",
    imgSrc: "radixui.svg",
    altText: "Radix UI Logo",
  },
  // {
  //   id: 8,
  //   title: "Framer Motion",
  //   imgSrc: "framer.svg",
  //   altText: "Framer Motion Logo",
  // },
  {
    id: 9,
    title: "Javascript",
    imgSrc: "js.svg",
    altText: "Javascript Logo",
  },
  {
    id: 10,
    title: "React JS",
    imgSrc: "reactjs.svg",
    altText: "React JS Logo",
  },
  {
    id: 11,
    title: "Redux JS",
    imgSrc: "redux.svg",
    altText: "Redux JS Logo",
  },
  // {
  //   id: 12,
  //   title: "Zod",
  //   imgSrc: "zod.svg",
  //   altText: "Zod Logo",
  // },
];

export const othersTechIcons: Array<TechIconType> = [
  {
    id: 1,
    title: "REST API",
    imgSrc: "restapi.svg",
    altText: "REST API Logo",
  },
  {
    id: 2,
    title: "Postman",
    imgSrc: "postman.svg",
    altText: "Postman Logo",
  },
  {
    id: 3,
    title: "Vite JS",
    imgSrc: "vitejs.svg",
    altText: "Vite Js Logo",
  },
  {
    id: 4,
    title: "Rollup Js",
    imgSrc: "rollup.svg",
    altText: "Rollup Js Logo",
  },
  {
    id: 5,
    title: "Eslint",
    imgSrc: "eslint.svg",
    altText: "Eslint Logo",
  },
  {
    id: 6,
    title: "Canva",
    imgSrc: "canva.svg",
    altText: "Canva Logo",
  },
  // {
  //   id: 7,
  //   title: "Prettier",
  //   imgSrc: "prettier.svg",
  //   altText: "Prettier Logo",
  // },
  // {
  //   id: 8,
  //   title: "JSON",
  //   imgSrc: "json.svg",
  //   altText: "JSON Logo",
  // },
  // {
  //   id: 9,
  //   title: "Figma",
  //   imgSrc: "figma.svg",
  //   altText: "Figma Logo",
  // },
  // {
  //   id: 10,
  //   title: "Markdown",
  //   imgSrc: "markdown.svg",
  //   altText: "Markdown Logo",
  // },
];

export const devToolsTechIcons: Array<TechIconType> = [
  {
    id: 1,
    title: "VS Code",
    imgSrc: "vscode.svg",
    altText: "VS Code Logo",
  },
  {
    id: 2,
    title: "Webstorm",
    imgSrc: "webstorm.svg",
    altText: "Webstorm Logo",
  },
  {
    id: 3,
    title: "Intellij IDEA",
    imgSrc: "intellij.svg",
    altText: "Intellij IDEA Logo",
  },
  {
    id: 4,
    title: "Datagrip",
    imgSrc: "datagrip.svg",
    altText: "Datagrip Logo",
  },
  // {
  //   id: 5,
  //   title: "JetBrains",
  //   imgSrc: "jetbrains.svg",
  //   altText: "JetBrains Logo",
  // },
];

export const backend_devopsTechIcons: Array<TechIconType> = [
  {
    id: 1,
    title: "Java",
    imgSrc: "java.svg",
    altText: "Java Logo",
  },
  {
    id: 2,
    title: "MySQL",
    imgSrc: "mysql.svg",
    altText: "MySQL Logo",
  },
  {
    id: 3,
    title: "MongoDB",
    imgSrc: "mongodb.svg",
    altText: "MongoDB Logo",
  },
  {
    id: 4,
    title: "Git",
    imgSrc: "git.svg",
    altText: "Git Logo",
  },
  {
    id: 5,
    title: "Github",
    imgSrc: "github.svg",
    altText: "Github Logo",
  },
  {
    id: 6,
    title: "Vercel",
    imgSrc: "vercel.svg",
    altText: "Vercel Logo",
  },
  {
    id: 7,
    title: "Cloudflare",
    imgSrc: "cloudflare.svg",
    altText: "Cloudflare Logo",
  },
  {
    id: 8,
    title: "Netlify",
    imgSrc: "netlify.svg",
    altText: "Netlify Logo",
  },
  // {
  //   id: 9,
  //   title: "Mongoose Js",
  //   imgSrc: "mongoose.svg",
  //   altText: "Mongoose Logo",
  // },
];

// export const devopsTechIcons: Array<TechIconType> = [
//   {
//     id: 1,
//     title: "Git",
//     imgSrc: "git.svg",
//     altText: "Git Logo",
//   },
//   {
//     id: 2,
//     title: "Github",
//     imgSrc: "github.svg",
//     altText: "Github Logo",
//   },
//   {
//     id: 3,
//     title: "Vercel",
//     imgSrc: "vercel.svg",
//     altText: "Vercel Logo",
//   },
//   {
//     id: 4,
//     title: "Cloudflare Pages",
//     imgSrc: "cloudflare.svg",
//     altText: "Cloudflare Pages Logo",
//   },
//   {
//     id: 5,
//     title: "Netlify",
//     imgSrc: "netlify.svg",
//     altText: "Netlify Logo",
//   },
// ];

// export const build_lintingToolsTechIcons: Array<TechIconType> = [
//   {
//     id: 1,
//     title: "Vite JS",
//     imgSrc: "vitejs.svg",
//     altText: "Vite Js Logo",
//   },
//   {
//     id: 2,
//     title: "Rollup Js",
//     imgSrc: "rollup.svg",
//     altText: "Rollup Js Logo",
//   },
//   {
//     id: 3,
//     title: "Eslint",
//     imgSrc: "eslint.svg",
//     altText: "Eslint Logo",
//   },
//   {
//     id: 4,
//     title: "Prettier",
//     imgSrc: "prettier.svg",
//     altText: "Prettier Logo",
//   },
// ];

// export const packageManagersTechIcons: Array<TechIconType> = [
//   {
//     id: 1,
//     title: "NPM",
//     imgSrc: "npm.svg",
//     altText: "NPM Logo",
//   },
//   {
//     id: 2,
//     title: "PNPM",
//     imgSrc: "pnpm.svg",
//     altText: "PNPM Logo",
//   },
//   {
//     id: 3,
//     title: "Yarn",
//     imgSrc: "yarn.svg",
//     altText: "Yarn Logo",
//   },
// ];

export interface MainProjectsType {
  id: number;
  title: string;
  techStacks: string;
  imgSrc: string;
  altText: string;
  githubLink: string;
  liveLink: string;
}

export const mainProjects: Array<MainProjectsType> = [
  {
    id: 1,
    title: "The Shopping Booth",
    techStacks: "React Js, Redux, Javascript, Shadcn/ui",
    imgSrc: "webstorm.png",
    altText: "The Shopping Booth",
    githubLink: "https://github.com/abhishekjaiswar221/the-shopping-booth",
    liveLink: "https://theshoppingbooth.vercel.app",
  },
  {
    id: 2,
    title: "Taskify Cloud Todo",
    techStacks: "React Js, Javascript, Shadcn/ui, Tailwind",
    imgSrc: "webstorm.png",
    altText: "Taskify Cloud Todo",
    githubLink: "https://github.com/abhishekjaiswar221/taskify-cloud-todo",
    liveLink: "https://taskifytodo.vercel.app",
  },
  {
    id: 3,
    title: "Microsoft UI Clone",
    techStacks: "React Js, Javascript, Tailwind",
    imgSrc: "webstorm.png",
    altText: "Microsoft UI Clone",
    githubLink: "https://github.com/abhishekjaiswar221/microsoft-ui-clone",
    liveLink: "https://microsoftui.vercel.app",
  },
  {
    id: 4,
    title: "News Monkey",
    techStacks: "React Js, Javascript, Bootstrap",
    imgSrc: "webstorm.png",
    altText: "News Monkey",
    githubLink: "https://github.com/abhishekjaiswar221/news-monkey",
    liveLink: "https://microsoftui.vercel.app",
  },
];

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  website: string;
  github: string;
}

export const projects: Array<ProjectType> = [
  {
    id: 1,
    title: "The Shopping Booth",
    description:
      "The Shopping Booth is an API based ecommerce website which uses dummyjson’s fake API to display various products.Built using React Js, Javascript, Redux Tookit and ShadCN UI",
    imageSrc: "/projects/jetbrains.jpg",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221/the-shopping-booth",
  },
  {
    id: 2,
    title: "Taskify Cloud Todo",
    description:
      "Takify Cloud Todo is a task management web application.Built using React Js, Tailwind CSS, ShadCN UI, Node Js and Express Js.",
    imageSrc: "/projects/preview.png",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221",
  },
  {
    id: 3,
    title: "The Annapurnas",
    description:
      "The Annapurnas is an application for ordering tiffin, with a three-day trial and monthly subscription option. It is built using HTML, CSS, Bootstrap 5, JQuery, Java, JSP, Servlet,JDBC, and MySQL .",
    imageSrc: "/projects/webstorm.png",
    website: "https://abhishekjaiswar.pages.dev",
    github: "https://github.com/abhishekjaiswar221",
  },
];
