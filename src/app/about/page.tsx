import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Andika, Noto_Sans } from "next/font/google";

const andika = Andika({ subsets: ["latin"], weight: "400" });
const noto_sans = Noto_Sans({ subsets: ["latin"] });

const Page: FC = (): JSX.Element => {
  return (
    <main
      id="about"
      className={cn(
        andika.className,
        "w-3xl mx-auto flex max-w-3xl flex-col px-6 py-10 md:px-10 md:pb-20 lg:px-5 lg:pt-5"
      )}
    >
      <div>
        <Button
          asChild
          variant="default"
          className="bg-transparent px-0 shadow-none hover:bg-zinc-900 hover:text-indigo-400"
        >
          <Link href="/">
            <ChevronLeft size={20} strokeWidth={1.5} />
            <span>Go back</span>
          </Link>
        </Button>
        <h3 className="mt-5 scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
          About Me
        </h3>
        <p
          className={cn(
            noto_sans.className,
            "mt-2 text-lg text-muted-foreground"
          )}
        >
          Get to know me better
        </p>
      </div>
      <div className="mt-8">
        <p className="text-justify leading-7 text-zinc-400">
          I am a Full Stack Web Developer with a strong emphasis on Frontend
          Development based in Mumbai, India. With a Bachelor&apos;s degree in
          Information Technology from Guru Nanak College of Arts, Science, and
          Commerce and currently pursuing a Master&apos;s degree in Information
          Technology from Guru Nanak College of Arts, Science, and Commerce , I
          am committed to staying at the forefront of web development
          technologies. My academic background has equipped me with a solid
          foundation in programming, design principles, and problem-solving,
          enabling me to create innovative and user-centric web applications.
        </p>

        <p className="mt-6 text-balance text-justify leading-7 text-zinc-400">
          As a skilled web developer, I possess a strong foundation in modern
          technologies like React, Next.js, Shadcn UI, and Tailwind CSS. My
          expertise lies in crafting visually appealing, accessible, and
          high-performance websites that deliver exceptional user experiences. I
          am dedicated to staying up-to-date with the latest industry trends and
          continuously honing my skills to deliver innovative and impactful web
          solutions. With a passion for building websites that exceed
          expectations, I am committed to creating digital experiences that
          leave a lasting impression.
        </p>
      </div>
    </main>
  );
};

export default Page;
