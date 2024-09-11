"use client";

import React, { FC } from "react";
import ProfilePhoto from "../component/profilePhoto";
import DesktopNavigation from "../component/desktopNavigation";
import MobileNavigation from "../component/mobileNavigation";

const headerNavigation: FC = () => {
  return (
    <div className="lg:sticky lg:top-8 lg:z-10">
      <div className="lg:flex lg:justify-center">
        <div className="flex w-full flex-row items-center justify-between gap-4 bg-zinc-800 px-6 py-5 text-zinc-100 antialiased md:px-10 lg:w-fit lg:rounded-2xl lg:border lg:border-zinc-700/60 lg:px-4 lg:py-[10px]">
          <div className="flex items-center justify-center gap-2">
            <div className="h-7 w-7">
              <ProfilePhoto />
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
    </div>
  );
};

export default headerNavigation;
