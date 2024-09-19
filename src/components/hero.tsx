import React, { FC } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import SocialIcon from "./component/socialIcon";
import ProfilePhoto from "./component/profilePhoto";

const Hero: FC = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-10 md:flex-row md:items-start md:justify-center md:gap-4">
      <div className="basis-2/3 space-y-6">
        <div>
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl xl:text-5xl">
            Hola, I&apos;m{" "}
            <span className="text-green-600">Abhishek Jaiswar</span>
            👋🏼
          </h1>
          <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight text-zinc-300 md:text-2xl lg:text-3xl xl:text-4xl">
            A <span className="text-green-600">Frontend</span> Web Developer,
          </h1>
        </div>
        <div>
          <p className="text-zinc-400">
            I&apos;m a frontend web developer with a passion for creating
            beautiful and user-friendly websites. I have experience in
            developing websites using modern technologies like React, Next.js,
            and Tailwind CSS.
          </p>
        </div>
        <div>
          <Button
            asChild
            className="w-fit rounded-lg border-2 border-green-600 bg-green-600 hover:bg-transparent"
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
