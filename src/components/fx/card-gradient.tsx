// Credits: https://ui.aceternity.com/

import { cn } from ">util/twm";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}): React.JSX.Element => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div
      className={cn("relative p-[4px] group", containerClassName)}
      data-testid="card-gradient"
    >
      <motion.div
        animate={animate ? "animate" : undefined}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
        data-testid="card-gradient-animatetest"
        data-testisanimate={animate}
        initial={animate ? "initial" : undefined}
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        variants={animate ? variants : undefined}
      />
      <motion.div
        animate={animate ? "animate" : undefined}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
        initial={animate ? "initial" : undefined}
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        variants={animate ? variants : undefined}
      />
      <div
        className={cn("relative z-10", className)}
        data-testid="card-gradient-mainclassnames"
      >
        {children}
      </div>
    </div>
  );
};
