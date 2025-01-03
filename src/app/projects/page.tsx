import React, { FC } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { andika } from "@/lib/fonts";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { moreProjects } from "@/data/moreProjects";
import { MoreProjectsType } from "@/data/dataTypes";
import MoreProjectCard from "@/components/Card/moreProjectCard";

export const metadata: Metadata = {
  title: "More Projects",
  description: "Personal Portfolio Website",

  // Alternates
  alternates: {
    canonical: "https://abhishekjaiswar.pages.dev/projects",
  },
};

const Page: FC = (): JSX.Element => {
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
          className="bg-transparent px-0 shadow-none hover:bg-zinc-950 hover:text-indigo-400"
        >
          <Link href="/">
            <ChevronLeft size={20} strokeWidth={1.5} />
            <span>Go back</span>
          </Link>
        </Button>
        <h1 className="mt-5 scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
          More Projects
        </h1>
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
