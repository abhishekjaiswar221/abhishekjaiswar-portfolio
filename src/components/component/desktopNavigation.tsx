import React, { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const DesktopNavigation: FC = () => {
  return (
    <NavigationMenu className="hidden text-zinc-400 lg:block">
      <NavigationMenuList className="space-x-4">
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={cn(
              navigationMenuTriggerStyle(),
              "rounded-xl bg-zinc-800 p-2 hover:bg-zinc-700 hover:text-zinc-200 focus:bg-transparent focus:text-zinc-200"
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
              "rounded-xl bg-zinc-800 p-2 hover:bg-zinc-700 hover:text-zinc-200 focus:bg-transparent focus:text-zinc-200"
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
              "rounded-xl bg-zinc-800 p-2 hover:bg-zinc-700 hover:text-zinc-200 focus:bg-transparent focus:text-zinc-200"
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
              "rounded-xl bg-zinc-800 p-2 hover:bg-zinc-700 hover:text-zinc-200 focus:bg-transparent focus:text-zinc-200"
            )}
          >
            <Link href="/experience">Work Experience</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
