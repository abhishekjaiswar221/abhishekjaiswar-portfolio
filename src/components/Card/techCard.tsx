import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Noto_Sans } from "next/font/google";
import { TechIconsType } from "@/data/dataTypes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

interface TechCardProps {
  iterableArray: Array<TechIconsType>;
  cardTitle: string;
}

const TechCard: FC<TechCardProps> = ({ iterableArray, cardTitle }) => {
  return (
    <Card className="rounded-lg border-zinc-700/60 bg-zinc-800 shadow-2xl">
      <CardHeader className="p-4">
        <CardTitle className="scroll-m-20 text-center text-lg font-semibold tracking-tight text-zinc-400 md:text-xl">
          {cardTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-3 p-5 pt-1 lg:grid-cols-4">
        {iterableArray.map(({ id, title, imgSrc, altText }: TechIconsType) => {
          return (
            <div key={id}>
              <Button className="flex h-full w-full flex-col items-center justify-center gap-2 border border-zinc-700/60 bg-zinc-900 shadow-lg hover:bg-zinc-800">
                <Image
                  src={`/techIcons/${imgSrc}`}
                  alt={altText}
                  width={22}
                  height={22}
                />
                <span
                  className={cn(noto_sans.className, "text-xs text-zinc-400")}
                >
                  {title}
                </span>
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default TechCard;
