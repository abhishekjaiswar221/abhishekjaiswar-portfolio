import React, { FC } from "react";
import Link from "next/link";
import { Copyright } from "lucide-react";
import Social from "../component/social";

const FooterNavigation: FC = () => {
  return (
    <footer
      id="footer"
      className="flex w-full flex-col gap-1 border-t border-zinc-700/60 py-5 lg:text-zinc-400"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div>
          <p className="text-center">Stay Connected</p>
        </div>
        <div>
          <Social styles={"text-zinc-200 lg:text-zinc-400"} />
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
          {Date().toString().slice(11, 15)} All Rights Reserved
        </p>
      </div>
      <div>
        <p className="text-center">Made With ❤️ By Abhishek Jaiswar</p>
      </div>
    </footer>
  );
};

export default FooterNavigation;
