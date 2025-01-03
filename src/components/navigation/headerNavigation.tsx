import React, { FC } from "react";
import Link from "next/link";
import BlurIn from "../magicui/blur-in";
import ProfilePhoto from "../component/profilePhoto";
import DesktopNavigation from "../component/desktopNavigation";
import MobileNavigation from "../component/mobileNavigation";

const HeaderNavigation: FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-opacity-30 backdrop-blur-lg backdrop-filter lg:mx-auto lg:max-w-5xl lg:bg-opacity-0 lg:px-8 lg:py-8 lg:backdrop-blur-0 lg:backdrop-filter-none">
      <div className="lg:flex lg:justify-center">
        <div className="flex w-full items-center justify-between px-6 py-5 antialiased md:px-10 lg:w-fit lg:rounded-2xl lg:border lg:border-zinc-700/60 lg:bg-zinc-800 lg:px-4 lg:py-[10px]">
          <div className="flex items-center justify-center gap-2 pr-6">
            <div>
              <BlurIn
                word={<ProfilePhoto styles={"h-7 w-7 rounded-full"} />}
                duration={0.6}
              />
            </div>
            <div>
              <Link href={"/"} className="font-semibold">
                Abhishek Jaiswar
              </Link>
            </div>
          </div>
          <div>
            {/* Desktop Navigation */}
            <DesktopNavigation />
            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation;
