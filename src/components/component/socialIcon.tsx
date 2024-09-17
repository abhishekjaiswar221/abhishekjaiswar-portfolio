import React, { FC } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const SocialIcon: FC = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <Link href={"http://github.com/abhishekjaiswar221"} target="_blank">
        <Github className="hover:text-green-600" size={20} strokeWidth={1.5} />
      </Link>
      <Link href={"https://linkedin.com/in/abhishekjai221"} target="_blank">
        <Linkedin
          className="hover:text-green-600"
          size={20}
          strokeWidth={1.5}
        />
      </Link>
      <Link href={"https://x.com/abhishekjai221"} target="_blank">
        <Twitter className="hover:text-green-600" size={20} strokeWidth={1.5} />
      </Link>
    </div>
  );
};

export default SocialIcon;
