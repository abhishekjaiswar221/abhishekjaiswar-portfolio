import React, { FC } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import SocialIcon from "./component/socialIcon";
import Background from "./component/background";
import ProfilePhoto from "./component/profilePhoto";

const Hero: FC = () => {
  return (
    <>
      <Background>
        <section className="flex h-screen flex-col items-center justify-center gap-5 md:h-[37rem] xl:h-[42rem]">
          <div className="flex flex-col items-center justify-center gap-8">
            <ProfilePhoto />
            <div className="space-y-4 text-center">
              <p className="scroll-m-20 text-2xl font-medium tracking-tight text-[#3c3c43] md:text-3xl lg:text-4xl">
                Hola Amigos !👋🏼 <br />
                <span>I&apos;m Abhishek Jaiswar</span>
              </p>
              <p className="scroll-m-20 tracking-tight text-[#65656a] md:text-lg xl:text-xl">
                I transform ideas into stunning realities
              </p>
              <span className="scroll-m-20 tracking-tight text-[#65656a] md:text-lg xl:text-xl">
                A <span className="text-[#3c3c43]">Frontend Web Developer</span>
                , with expertise in frontend frameworks like React Js
              </span>
            </div>
          </div>

          <SocialIcon />

          <div className="flex items-center justify-center gap-5">
            <Button
              asChild
              className="border-primaryColor hover:text-secondaryColor w-fit border-2 hover:bg-background"
            >
              <Link href="/contact">Connect</Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              className="border-primaryColor text-secondaryColor hover:bg-primaryColor w-fit border-2 hover:text-white"
            >
              <Link href="/resume">Resume</Link>
            </Button>
          </div>
        </section>
      </Background>
    </>
  );
};

export default Hero;
