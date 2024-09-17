import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

interface BackgroundProps {
  children: ReactNode;
}

const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="flex h-[43rem] w-full items-center justify-center overflow-hidden">
      {children}
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
        )}
      />
    </div>
  );
};

export default Background;
