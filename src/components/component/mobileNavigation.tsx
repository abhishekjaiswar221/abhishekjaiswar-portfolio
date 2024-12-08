"use client";

import React, { FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/navLinks";
import { NavLinksType } from "@/data/dataTypes";
import { mobileSocialNavLinks } from "@/data/navLinks";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MobileNavigation: FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex w-full items-center justify-end">
        <div
          className="lg:hidden"
          role="button"
          aria-label="Open main menu"
          tabIndex={0}
        >
          <Menu size={22} strokeWidth={1.5} />
        </div>
      </SheetTrigger>

      <SheetContent className="w-full">
        <VisuallyHidden>
          <SheetTitle
            aria-describedby="Name"
            className="text-lg font-semibold tracking-tight"
          >
            Abhishek D Jaiswar
          </SheetTitle>
          <SheetDescription>Header Navigation</SheetDescription>
        </VisuallyHidden>

        <ul className="flex h-screen flex-col items-start justify-start pt-6">
          <div>
            {navLinks.map(
              ({ path, name, icon }: NavLinksType, index: number) => {
                return (
                  <li key={index}>
                    <SheetClose asChild>
                      <Link className="flex gap-2 p-4 text-sm" href={path}>
                        {icon}
                        {name}
                      </Link>
                    </SheetClose>
                  </li>
                );
              }
            )}
          </div>
          <div className="pt-5">
            <h1>Socials</h1>
          </div>
          <div>
            {mobileSocialNavLinks.map(
              ({ path, name, icon }: NavLinksType, index: number) => {
                return (
                  <li key={index}>
                    <SheetClose asChild>
                      <Link
                        className="flex gap-2 p-4 text-sm"
                        href={path}
                        target="_blank"
                      >
                        {icon}
                        {name}
                      </Link>
                    </SheetClose>
                  </li>
                );
              }
            )}
          </div>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
