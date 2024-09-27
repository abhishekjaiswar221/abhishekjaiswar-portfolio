import React, { FC } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

interface SocialIconProps {
  styles?: string;
}

const SocialIcon: FC<SocialIconProps> = ({ styles }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <Link href={"http://github.com/abhishekjaiswar221"} target="_blank">
        <Github
          className={`${styles} box-content rounded-lg p-1 hover:bg-zinc-800 hover:text-indigo-400`}
          size={20}
          strokeWidth={1.5}
        />
      </Link>
      <Link href={"https://linkedin.com/in/abhishekjai221"} target="_blank">
        <Linkedin
          className={`${styles} box-content rounded-lg p-1 hover:bg-zinc-800 hover:text-indigo-400`}
          size={20}
          strokeWidth={1.5}
        />
      </Link>
      <Link href={"https://x.com/abhishekjai221"} target="_blank">
        <Twitter
          className={`${styles} box-content rounded-lg p-1 hover:bg-zinc-800 hover:text-indigo-400`}
          size={20}
          strokeWidth={1.5}
        />
      </Link>
    </div>
  );
};

export default SocialIcon;
