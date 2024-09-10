export interface TechIconsType {
  id: number;
  title: string;
  imgSrc: string;
  altText: string;
}

export interface TechCardProps {
  iterableArray: Array<TechIconsType>;
  cardTitle: string;
}

export interface SocialIconsType {
  id: number;
  title: string;
  imgSrc: string;
  altText: string;
  bgColor: string;
  borderColor: string;
  href: string;
}

export interface ProjectsType {
  id: number;
  title: string;
  techStacks: string;
  imgSrc: string;
  altText: string;
  github: string;
  live: string;
}
