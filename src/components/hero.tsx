import React, { FC } from "react";
import Socials from "./component/socials";
import HyperText from "./magicui/hyper-text";
import ProfilePhoto from "./component/profile-photo";
import ConnectDialog from "./component/connect-dialog";

const Hero: FC = () => {
  return (
    <section className="flex h-fit w-full flex-col gap-8 md:flex-row md:items-start md:justify-center md:gap-2 lg:gap-4 lg:pb-24 lg:pt-8">
      <div className="basis-2/3 space-y-2 md:space-y-6">
        <div className="md:space-y-2">
          <h1 className="scroll-m-20 text-balance text-3xl font-extrabold tracking-tight lg:text-4xl xl:text-5xl">
            Hola 👋🏼, I&apos;m{" "}
            <span className="text-indigo-500">Abhishek Jaiswar</span>
          </h1>
          <h1 className="flex scroll-m-20 items-center justify-start text-xl font-extrabold tracking-tight text-zinc-400 md:text-2xl lg:text-3xl xl:text-4xl">
            <div className="w-[108px] md:w-32 lg:w-40 xl:w-48">
              <HyperText className="text-indigo-500" text="Frontend" />
            </div>
            Web Developer
          </h1>
        </div>
        <div>
          <p className="text-balance leading-6 text-zinc-400 md:leading-7">
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
        <div className="flex items-center justify-center gap-5">
          <span className="lg:hidden">
            <ConnectDialog />
          </span>
          <Socials styles={"text-zinc-400"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
