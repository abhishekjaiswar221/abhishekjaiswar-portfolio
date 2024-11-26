import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Noto_Sans } from "next/font/google";
import { ProjectsType } from "@/data/dataTypes";

const noto_sans = Noto_Sans({ subsets: ["latin"] });

const ProjectCard: FC<ProjectsType> = ({
  id,
  imgSrc,
  altText,
  title,
  techStacks,
  live,
  github,
}: ProjectsType) => {
  return (
    <div className={cn(noto_sans.className)}>
      <Link key={id} target="_blank" href={live || github || "/"}>
        <div className="flex flex-col overflow-hidden overflow-ellipsis rounded-lg bg-zinc-50 text-zinc-800">
          <Image
            className="aspect-video object-cover"
            src={`/projects/${imgSrc}`}
            width={700}
            height={700}
            alt={altText}
          />
          <div className="flex flex-col border-t border-zinc-200 p-4">
            <div className="flex font-semibold">{title}</div>
            <div className="text-info flex text-xs text-zinc-600">
              {techStacks}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
