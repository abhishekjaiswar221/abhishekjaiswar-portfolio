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
import { Button } from "../ui/button";
import { Noto_Sans } from "next/font/google";
import { Circle, ExternalLink, Github } from "lucide-react";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

interface MoreProjectsCardProps {
  index: number;
}

const MoreProjectsCard: FC<MoreProjectsCardProps> = ({ index }) => {
  return (
    <Card key={index} className="border-zinc-700/60 bg-zinc-800">
      <CardHeader>
        <CardTitle className="text-zinc-200">The Annapurna&apos;s</CardTitle>
        <CardDescription className={cn(noto_sans.className)}>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </CardDescription>
      </CardHeader>
      <CardContent className={cn(noto_sans.className)}>
        <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Circle className="mr-1 h-3 w-3 text-indigo-500" size={20} />
            HTML, CSS, JQuery, Java, JSP, Servlet, MySQL
          </div>
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="default"
              className="hover:text-github bg-transparent px-0 text-zinc-400 shadow-none hover:bg-zinc-800"
            >
              <Link href="/">
                <Github size={18} strokeWidth={1.5} />
              </Link>
            </Button>

            <Button
              asChild
              variant="default"
              className="hover:text-linkedin bg-transparent px-0 text-zinc-400 shadow-none hover:bg-zinc-800"
            >
              <Link href="/">
                <ExternalLink size={18} strokeWidth={1.5} />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoreProjectsCard;
