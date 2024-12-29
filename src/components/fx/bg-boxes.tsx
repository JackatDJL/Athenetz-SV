"use client";

// Credits: https://ui.aceternity.com/

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from ">util/twm";

export const BoxesCore: React.FC<{ className?: string }> = ({
  className,
  ...rest
}) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  const colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  const getRandomColor = (): string => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
        className
      )}
      data-testid="boxes-container"
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      {...rest}
    >
      {rows.map((_row, i) => (
        <motion.div
          className="w-16 h-8 border-l border-slate-700 relative"
          data-key={i}
          data-testid="box-row"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        >
          {cols.map((__, j) => (
            <motion.div
              animate={{
                transition: { duration: 2 },
              }}
              className="w-16 h-8  border-r border-t border-slate-700 relative"
              data-testid="box-col"
              // eslint-disable-next-line react/no-array-index-key
              key={j}
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 },
              }}
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                  data-testid="box-icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6v12m6-6H6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = memo(BoxesCore);
