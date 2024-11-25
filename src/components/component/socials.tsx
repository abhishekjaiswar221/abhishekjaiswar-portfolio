"use client";

import React, { FC } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SocialIconsType } from "@/data/dataTypes";

interface SocialsProps {
  styles?: string;
}

const Socials: FC<SocialsProps> = ({ styles }) => {
  const socialIcons: Array<SocialIconsType> = [
    {
      path: "https://github.com/abhishekjaiswar221",
      icon: (
        <Github
          className={`${styles} box-content rounded-lg p-1 hover:bg-zinc-800 hover:text-indigo-400`}
          size={20}
          strokeWidth={1.5}
        />
      ),
    },
    {
      path: "https://linkedin.com/in/abhishekjai221",
      icon: (
        <Linkedin
          className={`${styles} box-content rounded-lg p-1 hover:bg-zinc-800 hover:text-indigo-400`}
          size={20}
          strokeWidth={1.5}
        />
      ),
    },
    {
      path: "https://x.com/abhishekjai221",
      icon: (
        <Twitter
          className={`${styles} box-content rounded-lg p-1 hover:bg-zinc-800 hover:text-indigo-400`}
          size={20}
          strokeWidth={1.5}
        />
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center gap-5">
      {socialIcons.map(({ path, icon }, index) => {
        return (
          <Link key={index} href={path} target="_blank">
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
