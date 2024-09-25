import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Andika } from "next/font/google";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import MoreProjectsCard from "@/components/Card/moreProjectsCard";

const andika = Andika({ subsets: ["latin"], weight: "400" });

const Page: FC = () => {
  return (
    <main
      id="experience"
      className={cn(
        andika.className,
        "mx-auto flex w-full max-w-3xl flex-col px-4 pb-20 pt-2"
      )}
    >
      <div>
        <Button
          asChild
          variant="default"
          className="bg-transparent px-0 shadow-none hover:bg-zinc-900 hover:text-zinc-200"
        >
          <Link href="/">
            <ChevronLeft size={20} strokeWidth={1.5} />
            <span>Go back</span>
          </Link>
        </Button>
        <h3 className="mt-4 scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
          More Projects
        </h3>
      </div>
      <div className="mt-8">
        <ul className="flex flex-col items-center gap-4">
          {[...Array(3)].map((_, index: number) => (
            <MoreProjectsCard key={index} index={index} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Page;
