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
import { mobileNavLinks } from "@/data/navLinks";
import { mobileSocialLinks } from "@/data/navLinks";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const MobileNavigation: FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex w-full items-center justify-end">
        <div className="lg:hidden">
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
            {mobileNavLinks.map(({ path, name, icon }, index) => {
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
            })}
          </div>
          <div className="pt-5">
            <h1>Socials</h1>
          </div>
          <div>
            {mobileSocialLinks.map(({ path, name, icon }, index) => {
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
            })}
          </div>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
