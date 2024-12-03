"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { projects } from "@/data/projects";
import ProjectCard from "./Card/projectCard";
import { ProjectsType } from "@/data/dataTypes";

const Projects: FC = () => {
  return (
    <section className="flex w-full flex-col gap-10">
      <div>
        <h1 className="scroll-m-20 text-center text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
          Projects
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {projects.map(
          ({
            id,
            imgSrc,
            altText,
            title,
            techStacks,
            live,
            github,
          }: ProjectsType) => {
            return (
              <ProjectCard
                key={id}
                id={id}
                imgSrc={imgSrc}
                altText={altText}
                title={title}
                techStacks={techStacks}
                live={live}
                github={github}
              />
            );
          }
        )}
      </div>
      <div className="text-center">
        <Button
          asChild
          className="rounded-lg border-2 border-indigo-600 bg-indigo-600 text-zinc-200 hover:bg-transparent"
        >
          <Link href="/projects">More Projects</Link>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
