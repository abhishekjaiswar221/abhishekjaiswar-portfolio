"use client";

import React, { FC } from "react";
import Link from "next/link";
import { Copyright } from "lucide-react";
import Socials from "../component/socials";

const FooterNavigation: FC = () => {
  return (
    <footer
      id="footer"
      className="flex w-full flex-col gap-1 border-t border-zinc-700/60 py-5"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div>
          <p className="text-center">Stay Connected</p>
        </div>
        <div>
          <Socials styles={"text-zinc-100"} />
        </div>
      </div>
      <div className="pb-1 pt-2">
        <Link
          href={
            "https://github.com/abhishekjaiswar221/abhishekjaiswar-portfolio"
          }
          target="_blank"
        >
          <p className="text-center text-xs hover:text-indigo-400">
            Source Code
          </p>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Copyright className="pt-[2px]" size={15} strokeWidth={1.5} />
        <p className="text-center text-sm">
          {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
      <div>
        <p className="text-center">Made With ❤️ By Abhishek Jaiswar</p>
      </div>
    </footer>
  );
};

export default FooterNavigation;
