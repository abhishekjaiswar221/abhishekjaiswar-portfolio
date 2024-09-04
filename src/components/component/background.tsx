import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

interface BackgroundProps {
  children: ReactNode;
}

const Background: FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-background px-6 md:px-10 lg:px-20 xl:px-32">
      {children}
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
    </div>
  );
};

export default Background;
