import React, { FC } from "react";
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
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

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
          <li>
            <SheetTrigger asChild>
              <div className="flex items-center justify-center gap-2 p-4">
                <Home size={22} strokeWidth={1.5} />
                <Link className="text-sm" href="/">
                  Home
                </Link>
              </div>
            </SheetTrigger>
          </li>
          <li>
            <SheetTrigger asChild>
              <div className="flex items-center justify-center gap-2 p-4">
                <SquareTerminal size={22} strokeWidth={1.5} />
                <Link className="text-sm" href="/skills">
                  Skills
                </Link>
              </div>
            </SheetTrigger>
          </li>
          <li>
            <SheetTrigger asChild>
              <div className="flex items-center justify-center gap-2 p-4">
                <CodeXml size={22} strokeWidth={1.5} />
                <Link className="text-sm" href="/projects">
                  More Projects
                </Link>
              </div>
            </SheetTrigger>
          </li>
          <li>
            <SheetTrigger asChild>
              <div className="flex items-center justify-center gap-2 p-4">
                <Monitor size={22} strokeWidth={1.5} />
                <Link className="text-sm" href="/experience">
                  Work Experience
                </Link>
              </div>
            </SheetTrigger>
          </li>
          <li>
            <SheetTrigger asChild>
              <div className="flex items-center justify-center gap-2 p-4">
                <UserRound size={22} strokeWidth={1.5} />
                <Link className="text-sm" href="/contact">
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
                <Github className="text-github" size={22} strokeWidth={1.5} />
                <Link
                  className="text-sm"
                  href="https://github.com/abhishekjaiswar221"
                >
                  Github
                </Link>
              </div>
            </SheetTrigger>
          </li>
          <li>
            <SheetTrigger asChild>
              <div className="flex items-center justify-center gap-2 p-4">
                <Linkedin
                  className="text-linkedin"
                  size={22}
                  strokeWidth={1.5}
                />
                <Link
                  className="text-sm"
                  href="https://linkedin.com/in/abhishekjai221"
                >
                  LinkedIn
                </Link>
              </div>
            </SheetTrigger>
          </li>
          <li>
            <SheetTrigger asChild>
              <div className="flex items-center justify-center gap-2 p-4">
                <Twitter className="text-twitter" size={22} strokeWidth={1.5} />
                <Link className="text-sm" href="https://x.com/abhishekjai221">
                  Twitter
                </Link>
              </div>
            </SheetTrigger>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
