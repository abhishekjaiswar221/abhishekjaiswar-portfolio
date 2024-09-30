import React, { FC } from "react";
import Hero from "@/components/hero";
import { cn } from "@/lib/utils";
import Skills from "@/components/skills";
import { Andika } from "next/font/google";
import Projects from "@/components/projects";
import { FadeText } from "@/components/ui/fade-text";

const andika = Andika({ subsets: ["latin"], weight: "400" });

const Home: FC = () => {
  return (
    <main
      className={cn(
        andika.className,
        "mx-auto flex max-w-5xl flex-col items-center gap-20 px-6 py-10 md:px-10 md:py-20 xl:px-0"
      )}
    >
      <section id="hero">
        <FadeText
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
          }}
          text={<Hero />}
        />
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
