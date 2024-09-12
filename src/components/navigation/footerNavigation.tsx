import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { socialIcons } from "@/data/socialIcons";
import { Copyright } from "lucide-react";

const FooterNavigation: FC = () => {
  return (
    <footer
      id="footer"
      className="flex w-full flex-col gap-1 bg-zinc-800 py-5 text-zinc-100"
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <div>
          <p className="text-center">Stay Connected</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
          {socialIcons.map(({ id, imgSrc, altText, bgColor, href }) => {
            return (
              <div key={id} className="rounded-full border p-[2px] shadow-md">
                <Link
                  key={id}
                  href={href || "/"}
                  target="_blank"
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${bgColor} hover:scale-95`}
                >
                  <Image
                    src={`/socials/${imgSrc}`}
                    alt={altText}
                    width={18}
                    height={18}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pb-1 pt-2">
        <Link
          href={
            "https://github.com/abhishekjaiswar221/abhishekjaiswar-portfolio"
          }
          target="_blank"
        >
          <p className="text-center text-xs">Source Code</p>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Copyright className="pt-[2px]" size={15} strokeWidth={1.5} />
        <p className="text-center">
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
