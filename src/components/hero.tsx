"use client";

import React, { FC } from "react";
import Socials from "./component/socials";
import ProfilePhoto from "./component/profilePhoto";
import HyperText from "./magicui/hyper-text";
import ConnectDialog from "./component/connectDialog";

const Hero: FC = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-10 md:flex-row md:items-start md:justify-center md:gap-2 lg:gap-4 lg:pb-24 lg:pt-8">
      <div className="basis-2/3 space-y-6">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-balance text-3xl font-extrabold tracking-tight lg:text-4xl xl:text-5xl">
            Hola 👋🏼, I&apos;m{" "}
            <span className="text-indigo-500">Abhishek Jaiswar</span>
          </h1>
          <h1 className="flex scroll-m-20 items-center justify-start text-xl font-extrabold tracking-tight text-zinc-400 md:text-2xl lg:text-3xl xl:text-4xl">
            <div className="w-[108px] md:w-32 lg:w-40 xl:w-48">
              <HyperText
                className="text-indigo-500"
                text="Frontend"
                animateOnLoad={false}
              />
            </div>
            Web Developer
          </h1>
        </div>
        <div>
          <p className="text-balance leading-7 text-zinc-400">
            I&apos;m a frontend web developer with a passion for creating
            beautiful and user-friendly websites. I have experience in
            developing websites using modern technologies like React, Next.js,
            and Tailwind CSS.
          </p>
        </div>
        <div className="hidden lg:block">
          <ConnectDialog />
        </div>
      </div>
      <div className="basis-1/3 space-y-4">
        <ProfilePhoto styles={"aspect-square w-full h-full rounded-xl"} />
        <div>
          <Socials styles={"text-zinc-400"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
