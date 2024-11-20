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

const DesktopNavigation: FC = () => {
  return (
    <NavigationMenu className="hidden text-zinc-400 lg:block">
      <NavigationMenuList className="space-x-4">
        {navLinks.map(({ name, path }, index) => {
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "rounded-xl bg-zinc-800 p-2 hover:bg-zinc-700 hover:text-zinc-200 focus:bg-transparent focus:text-zinc-200"
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
