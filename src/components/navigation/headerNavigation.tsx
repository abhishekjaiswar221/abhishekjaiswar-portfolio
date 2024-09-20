"use client";

import React, { FC } from "react";
import ProfilePhoto from "../component/profilePhoto";
import DesktopNavigation from "../component/desktopNavigation";
import MobileNavigation from "../component/mobileNavigation";

const headerNavigation: FC = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:z-10 lg:mx-auto lg:max-w-5xl lg:px-8 lg:py-8">
      <div className="lg:flex lg:justify-center">
        <div className="flex w-full flex-row items-center justify-between border-b border-zinc-700/60 px-6 py-5 text-zinc-100 antialiased md:px-10 lg:w-fit lg:rounded-2xl lg:border lg:bg-zinc-800 lg:px-4 lg:py-[10px]">
          <div className="flex items-center justify-center gap-2 pr-6">
            <div>
              <ProfilePhoto styles={"h-7 w-7"} />
            </div>
            <div>
              <h1 className="font-semibold">Abhishek Jaiswar</h1>
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

export default headerNavigation;
