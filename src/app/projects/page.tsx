"use client";

import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Andika } from "next/font/google";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { moreProjects } from "@/data/moreProjects";
import { MoreProjectsType } from "@/data/dataTypes";
import MoreProjectCard from "@/components/Card/moreProjectCard";

const andika = Andika({ subsets: ["latin"], weight: "400" });

const Page: FC = () => {
  return (
    <main
      id="experience"
      className={cn(
        andika.className,
        "w-3xl mx-auto flex max-w-3xl flex-col px-6 py-10 md:px-10 md:pb-20 lg:px-5 lg:pt-5"
      )}
    >
      <div>
        <Button
          asChild
          variant="default"
          className="bg-transparent px-0 shadow-none hover:bg-zinc-900 hover:text-indigo-400"
        >
          <Link href="/">
            <ChevronLeft size={20} strokeWidth={1.5} />
            <span>Go back</span>
          </Link>
        </Button>
        <h3 className="mt-5 scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
          More Projects
        </h3>
      </div>
      <div className="mt-8">
        <ul className="flex flex-col gap-5">
          {moreProjects.map(
            ({
              id,
              title,
              techStacks,
              description,
              github,
              live,
            }: MoreProjectsType) => {
              return (
                <MoreProjectCard
                  key={id}
                  id={id}
                  title={title}
                  techStacks={techStacks}
                  description={description}
                  github={github}
                  live={live}
                />
              );
            }
          )}
        </ul>
      </div>
    </main>
  );
};

export default Page;
