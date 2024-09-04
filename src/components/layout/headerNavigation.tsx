"use client";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
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
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const HeaderNavigation: FC = () => {
  return (
    <header className="text-primaryTextColor sticky top-0 z-10 flex w-full items-center justify-between bg-white bg-opacity-30 px-6 py-4 shadow-md backdrop-blur-lg backdrop-filter md:px-10 lg:px-20 xl:px-32">
      {/* Desktop Navigation */}
      <div>
        <Button asChild className="flex items-center justify-center gap-1 p-2">
          <Link href="/contact">
            <span>Contact Me</span>
            <UserRound size={17} />
          </Link>
        </Button>
      </div>
      <NavigationMenu className="hidden lg:flex lg:w-full lg:items-center lg:justify-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:text-secondaryColor hover:bg-transparent focus:bg-transparent"
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
                "hover:text-secondaryColor hover:bg-transparent focus:bg-transparent"
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
                "hover:text-secondaryColor hover:bg-transparent focus:bg-transparent"
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
                "hover:text-secondaryColor hover:bg-transparent focus:bg-transparent"
              )}
            >
              <Link href="/experience">Work Experience</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="flex w-full items-center justify-end">
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
                  <Link className="focus:text-secondaryColor" href="/">
                    Home
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <SquareTerminal />
                  <Link className="focus:text-secondaryColor" href="/skills">
                    Skills
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <CodeXml />
                  <Link className="focus:text-secondaryColor" href="/projects">
                    More Projects
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <Monitor />
                  <Link
                    className="focus:text-secondaryColor"
                    href="/experience"
                  >
                    Work Experience
                  </Link>
                </div>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <div className="flex items-center justify-center gap-2 p-4">
                  <UserRound />
                  <Link className="focus:text-secondaryColor" href="/contact">
                    Contact
                  </Link>
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
    </header>
  );
};

export default HeaderNavigation;
