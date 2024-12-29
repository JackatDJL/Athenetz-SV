"use client";

import { useEffect } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useSpring, useTransform } from "framer-motion";
import { Text as cldText } from ">util/classnames";

interface AnimatedNumberProps {
  value: number;
  mass?: number;
  stiffness?: number;
  damping?: number;
  precision?: number;

  format?: (value: number) => string;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}

export function Custom({
  value,
  mass = 0.8,
  stiffness = 75,
  damping = 15,
  precision = 0,
  format = (num) => num.toLocaleString(),
  onAnimationStart,
  onAnimationComplete,
}: AnimatedNumberProps): React.JSX.Element {
  const spring = useSpring(value, { mass, stiffness, damping });
  const display: MotionValue<string> = useTransform(spring, (current: number) =>
    format(parseFloat(current.toFixed(precision)))
  );

  useEffect(() => {
    spring.set(value);
    if (onAnimationStart) onAnimationStart();
    // eslint-disable-next-line @typescript-eslint/no-deprecated -- idk it works
    const unsubscribe = spring.onChange(() => {
      if (spring.get() === value && onAnimationComplete) onAnimationComplete();
    });
    return () => {
      unsubscribe();
    };
  }, [spring, value, onAnimationStart, onAnimationComplete]);

  return (
    <motion.span className={cldText} data-testid="animated-number">
      {display}
    </motion.span>
  );
}

export function SpringNumbers({
  value,
  onAnimationStart,
  onAnimationComplete,
}: AnimatedNumberProps): React.JSX.Element {
  return (
    <Custom
      damping={15}
      mass={1.3}
      onAnimationComplete={onAnimationComplete}
      onAnimationStart={onAnimationStart}
      stiffness={50}
      value={value}
    />
  );
}
