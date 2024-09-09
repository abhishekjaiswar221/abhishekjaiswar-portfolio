import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "@/data/socialIcons";
import { SocialIconsType } from "@/data/dataTypes";

const socialIcon: FC = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-3 pt-5">
      {socialIcons.map(
        ({
          id,
          imgSrc,
          altText,
          bgColor,
          borderColor,
          href,
        }: SocialIconsType) => {
          return (
            <div
              key={id}
              className={`rounded-full border-2 p-[2px] ${borderColor} shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]`}
            >
              <Link
                href={href || "/"}
                target="_blank"
                className={`flex h-9 w-9 items-center justify-center rounded-full ${bgColor} hover:scale-95`}
              >
                <Image
                  src={`/socials/${imgSrc}`}
                  alt={altText}
                  width={19}
                  height={19}
                />
              </Link>
            </div>
          );
        }
      )}
    </div>
  );
};

export default socialIcon;
