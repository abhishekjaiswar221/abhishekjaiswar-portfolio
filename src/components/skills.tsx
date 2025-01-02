import React, { FC } from "react";
import {
  frontendTechIcons,
  backend_devopsTechIcons,
  devtoolsTechIcons,
  othersTechIcons,
} from "@/data/tech-icons";
import TechCard from "@/components/card/tech-card";

const Skills: FC = () => {
  return (
    <section className="flex flex-col gap-10">
      <div>
        <h1 className="scroll-m-20 text-center text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
          What I Know
        </h1>
      </div>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2">
        <TechCard cardTitle={"Frontend"} iterableArray={frontendTechIcons} />
        <TechCard
          cardTitle={"Backend & DevOps"}
          iterableArray={backend_devopsTechIcons}
        />
        <TechCard cardTitle={"Dev Tools"} iterableArray={devtoolsTechIcons} />
        <TechCard cardTitle={"Others"} iterableArray={othersTechIcons} />
      </div>
    </section>
  );
};

export default Skills;
