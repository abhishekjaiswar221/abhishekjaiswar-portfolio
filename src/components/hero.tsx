import React, { FC } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import SocialIcon from "./component/socialIcon";
import ProfilePhoto from "./component/profilePhoto";

const Hero: FC = () => {
  return (
    <section className="flex h-fit w-full items-start justify-center">
      <div className="basis-2/3 space-y-6">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            A <span className="text-green-600">Frontend Web Developer</span>,
          </h1>
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
            I transform ideas into stunning realities
          </h1>
        </div>
        <div>
          <p className="text-balance text-zinc-400">
            A React JS developer is a software engineer specializing in building
            interactive and responsive user interfaces for web applications
            using the open-source JavaScript library, React, which allows them
            to create reusable components to efficiently design complex
            front-end structures, often incorporating features like routing,
            state management, and data fetching to deliver seamless user
            experiences across different devices.
          </p>
        </div>
        <div>
          <Button
            asChild
            variant={"ghost"}
            className="w-fit border-2 border-green-600 hover:bg-green-600 hover:text-zinc-100"
          >
            <Link href="/connect">Connect</Link>
          </Button>
        </div>
      </div>
      <div className="basis-1/3 space-y-4">
        <div>
          <ProfilePhoto styles={"w-full h-full rounded-lg aspect-square"} />
        </div>
        <div>
          <SocialIcon />
        </div>
      </div>
    </section>
  );
};

export default Hero;
