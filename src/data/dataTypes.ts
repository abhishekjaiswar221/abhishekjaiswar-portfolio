import React from "react";

export interface MobileNavLinksType {
  path: string;
  name: string;
  icon: React.ReactNode;
}

export interface DesktopNavLinksType {
  path: string;
  name: string;
}

export interface MobileSocialNavLinksType {
  path: string;
  name: string;
  icon: React.ReactNode;
}

export interface SocialIconsType {
  path: string;
  icon: React.ReactNode;
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

export interface MoreProjectsType {
  id: number;
  title: string;
  techStacks: Array<String>;
  description: string;
  github: string;
  live: string;
}

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
