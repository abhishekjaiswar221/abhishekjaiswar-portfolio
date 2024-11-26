import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Noto_Sans } from "next/font/google";
import { MoreProjectsType } from "@/data/dataTypes";
import { Github, SquareArrowOutUpRight } from "lucide-react";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

const MoreProjectCard: FC<MoreProjectsType> = ({
  id,
  title,
  techStacks,
  description,
  github,
  live,
}: MoreProjectsType) => {
  return (
    <Card key={id} className="border-zinc-700/60 bg-zinc-800 text-zinc-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className={cn(noto_sans.className)}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className={cn(noto_sans.className)}>
        <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center gap-2">
            {techStacks.map((element: String, index: number) => {
              return (
                <Badge
                  className="cursor-default rounded-sm border-zinc-700/60 bg-zinc-900 text-zinc-400 shadow-md hover:bg-zinc-800"
                  key={index}
                  variant={"outline"}
                >
                  {element}
                </Badge>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="default"
              className="bg-transparent px-0 text-zinc-400 shadow-none hover:bg-zinc-800 hover:text-indigo-400"
            >
              <Link href={github || "/"} target="_blank">
                <Github size={18} strokeWidth={1.5} />
              </Link>
            </Button>

            <Button
              asChild
              variant="default"
              className="bg-transparent px-0 text-zinc-400 shadow-none hover:bg-zinc-800 hover:text-indigo-400"
            >
              <Link href={live || "/"} target="_blank">
                <SquareArrowOutUpRight size={18} strokeWidth={1.5} />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoreProjectCard;
