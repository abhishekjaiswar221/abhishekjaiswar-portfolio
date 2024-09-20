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
}) => {
  return (
    <div className={cn(noto_sans.className)}>
      <Link key={id} target="_blank" href={live || github || "/"}>
        <div className="flex flex-col overflow-hidden overflow-ellipsis rounded-lg bg-zinc-50 text-zinc-800">
          <Image
            src={`/projects/${imgSrc}`}
            alt={altText}
            width={700}
            height={700}
            className="aspect-video object-cover"
          />
          <div className="flex flex-col p-4">
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
