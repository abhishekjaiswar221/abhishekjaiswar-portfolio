import React, { FC } from "react";
import { cn } from "@/lib/utils";
import Hero from "@/components/hero";
import { andika } from "@/lib/fonts";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import BlurFade from "@/components/magicui/blur-fade";

const Home: FC = (): JSX.Element => {
  return (
    <main
      className={cn(
        andika.className,
        "mx-auto flex max-w-5xl flex-col items-center gap-20 px-6 py-10 md:px-10 md:py-20 xl:px-0"
      )}
    >
      <section id="hero">
        <BlurFade delay={0.25} inView={true}>
          <Hero />
        </BlurFade>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </main>
  );
};

export default Home;
