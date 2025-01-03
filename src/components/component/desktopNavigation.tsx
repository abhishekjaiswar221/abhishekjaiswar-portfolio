"use client";

import React, { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/navLinks";

interface NavLink {
  name: string;
  path: string;
}

const DesktopNavigation: FC = () => {
  return (
    <NavigationMenu className="hidden lg:block">
      <NavigationMenuList className="space-x-4">
        {navLinks.map(({ name, path }: NavLink, index: number) => {
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "rounded-xl bg-zinc-800 p-2 hover:bg-zinc-700 hover:text-zinc-100 focus:bg-transparent focus:text-zinc-100"
                )}
              >
                <Link href={path}>{name}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
