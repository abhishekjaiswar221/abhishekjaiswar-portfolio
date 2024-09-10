"use client";

import React, { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CodeXml,
  Github,
  Home,
  Linkedin,
  Menu,
  Monitor,
  SquareTerminal,
  Twitter,
  UserRound,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProfilePhoto from "../component/profilePhoto";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const headerNavigation: FC = () => {
  return (
    <div className="lg:sticky lg:top-8 lg:z-10">
      <div className="lg:flex lg:justify-center">
        <div className="flex w-full flex-row items-center justify-between gap-4 bg-zinc-800 px-6 py-4 text-white antialiased md:px-10 lg:w-fit lg:rounded-2xl lg:border lg:border-zinc-700/60 lg:px-4 lg:py-[10px]">
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
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList className="space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-xl bg-zinc-800 p-2 hover:bg-[#3f3f46] hover:text-white focus:bg-transparent focus:text-white"
                    )}
                  >
                    <Link href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-xl bg-zinc-800 p-2 hover:bg-[#3f3f46] hover:text-white focus:bg-transparent focus:text-white"
                    )}
                  >
                    <Link href="#skills">Skills</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-xl bg-zinc-800 p-2 hover:bg-[#3f3f46] hover:text-white focus:bg-transparent focus:text-white"
                    )}
                  >
                    <Link href="/projects">More Projects</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "rounded-xl bg-zinc-800 p-2 hover:bg-[#3f3f46] hover:text-white focus:bg-transparent focus:text-white"
                    )}
                  >
                    <Link href="/experience">Work Experience</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger
                asChild
                className="flex w-full items-center justify-end"
              >
                <div className="lg:hidden">
                  <Menu />
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
                  <li>
                    <SheetTrigger asChild>
                      <div className="flex items-center justify-center gap-2 p-4">
                        <Home />
                        <Link href="/">Home</Link>
                      </div>
                    </SheetTrigger>
                  </li>
                  <li>
                    <SheetTrigger asChild>
                      <div className="flex items-center justify-center gap-2 p-4">
                        <SquareTerminal />
                        <Link href="/skills">Skills</Link>
                      </div>
                    </SheetTrigger>
                  </li>
                  <li>
                    <SheetTrigger asChild>
                      <div className="flex items-center justify-center gap-2 p-4">
                        <CodeXml />
                        <Link href="/projects">More Projects</Link>
                      </div>
                    </SheetTrigger>
                  </li>
                  <li>
                    <SheetTrigger asChild>
                      <div className="flex items-center justify-center gap-2 p-4">
                        <Monitor />
                        <Link href="/experience">Work Experience</Link>
                      </div>
                    </SheetTrigger>
                  </li>
                  <li>
                    <SheetTrigger asChild>
                      <div className="flex items-center justify-center gap-2 p-4">
                        <UserRound />
                        <Link href="/contact">Contact</Link>
                      </div>
                    </SheetTrigger>
                  </li>
                  <div className="pt-5">
                    <h1>Socials</h1>
                  </div>
                  <li>
                    <SheetTrigger asChild>
                      <div className="flex items-center justify-center gap-2 p-4">
                        <Github className="text-github" />
                        <Link href="https://github.com/abhishekjaiswar221">
                          Github
                        </Link>
                      </div>
                    </SheetTrigger>
                  </li>
                  <li>
                    <SheetTrigger asChild>
                      <div className="flex items-center justify-center gap-2 p-4">
                        <Linkedin className="text-linkedin" />
                        <Link href="https://linkedin.com/in/abhishekjai221">
                          LinkedIn
                        </Link>
                      </div>
                    </SheetTrigger>
                  </li>
                  <li>
                    <SheetTrigger asChild>
                      <div className="flex items-center justify-center gap-2 p-4">
                        <Twitter className="text-twitter" />
                        <Link href="https://x.com/abhishekjai221">Twitter</Link>
                      </div>
                    </SheetTrigger>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headerNavigation;
