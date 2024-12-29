"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { X } from "react-feather";

import { cn } from ">util/twm";

const TRANSITION = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3,
};

function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;

      if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}

interface ScaleUpContextType {
  isOpen: boolean;
  openScaleUp: () => void;
  closeScaleUp: () => void;
  uniqueId: string;
  note: string;
  setNote: (note: string) => void;
}

const ScaleUpContext = createContext<ScaleUpContextType | undefined>(undefined);

function useScaleUp(): ScaleUpContextType {
  const context = useContext(ScaleUpContext);
  if (!context) {
    throw new Error("useScaleUp must be used within a ScaleUpProvider");
  }
  return context;
}

function useScaleUpLogic(): ScaleUpContextType {
  const uniqueId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState("");

  const openScaleUp = (): void => {
    setIsOpen(true);
  };
  const closeScaleUp = (): void => {
    setIsOpen(false);
    setNote("");
  };

  return { isOpen, openScaleUp, closeScaleUp, uniqueId, note, setNote };
}

interface ScaleUpRootProps {
  children: React.ReactNode;
  className?: string;
}

function ScaleUpRoot({
  children,
  className,
}: ScaleUpRootProps): React.JSX.Element {
  const ScaleUpLogic = useScaleUpLogic();

  return (
    <ScaleUpContext.Provider value={ScaleUpLogic}>
      <MotionConfig transition={TRANSITION}>
        <div
          className={cn(
            "relative flex items-center justify-center isolate",
            className
          )}
        >
          {children}
        </div>
      </MotionConfig>
    </ScaleUpContext.Provider>
  );
}

interface ScaleUpTriggerProps {
  children: React.ReactNode;
  className?: string;
}

function ScaleUpTrigger({
  children,
  className,
}: ScaleUpTriggerProps): React.JSX.Element {
  const { openScaleUp, uniqueId } = useScaleUp();

  return (
    <motion.button
      className={cn(
        "flex h-9 items-center border border-zinc-950/10 bg-white px-3 text-zinc-950 dark:border-zinc-50/10 dark:bg-zinc-700 dark:text-zinc-50",
        className
      )}
      key="button"
      layoutId={`ScaleUp-${uniqueId}`}
      onClick={openScaleUp}
      style={{
        borderRadius: 8,
      }}
    >
      <motion.span className="text-sm" layoutId={`ScaleUp-label-${uniqueId}`}>
        {children}
      </motion.span>
    </motion.button>
  );
}

interface ScaleUpContentProps {
  children: React.ReactNode;
  className?: string;
  header?: string;
}

function ScaleUpContent({
  header,
  children,
  className,
}: ScaleUpContentProps): React.JSX.Element {
  const { isOpen, closeScaleUp, uniqueId } = useScaleUp();
  const formContainerRef = useRef<HTMLDivElement>(null);

  useClickOutside(formContainerRef, closeScaleUp);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeScaleUp();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeScaleUp]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className={cn(
            "absolute h-[200px] w-[364px] overflow-hidden border border-zinc-950/10 bg-white outline-none dark:bg-zinc-700 z-50", // Changed z-90 to z-50
            className
          )}
          layoutId={`ScaleUp-${uniqueId}`}
          ref={formContainerRef}
          style={{
            borderRadius: 12,
            top: "auto",
            left: "auto",
            transform: "none",
          }}
        >
          {header ? <ScaleUpHeader>{header}</ScaleUpHeader> : null}
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

interface ScaleUpFormProps {
  children: React.ReactNode;
  onSubmit?: (note: string) => void;
  className?: string;
}

function ScaleUpForm({
  children,
  onSubmit,
  className,
}: ScaleUpFormProps): React.JSX.Element {
  const { note, closeScaleUp } = useScaleUp();

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    onSubmit?.(note);
    closeScaleUp();
  };

  return (
    <form
      className={cn("flex h-full flex-col", className)}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}

interface ScaleUpLabelProps {
  children: React.ReactNode;
  className?: string;
}

function ScaleUpLabel({
  children,
  className,
}: ScaleUpLabelProps): React.JSX.Element {
  const { uniqueId, note } = useScaleUp();

  return (
    <motion.span
      aria-hidden="true"
      className={cn(
        "absolute left-4 top-3 select-none text-sm text-zinc-500 dark:text-zinc-400",
        className
      )}
      layoutId={`ScaleUp-label-${uniqueId}`}
      style={{
        opacity: note ? 0 : 1,
      }}
    >
      {children}
    </motion.span>
  );
}

interface ScaleUpTextareaProps {
  className?: string;
}

function ScaleUpTextarea({
  className,
}: ScaleUpTextareaProps): React.JSX.Element {
  const { note, setNote } = useScaleUp();

  return (
    <textarea
      className={cn(
        "h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none",
        className
      )}
      onChange={(e) => {
        setNote(e.target.value);
      }}
      value={note}
    />
  );
}

interface ScaleUpFooterProps {
  children: React.ReactNode;
  className?: string;
}

function ScaleUpFooter({
  children,
  className,
}: ScaleUpFooterProps): React.JSX.Element {
  return (
    <div
      className={cn("flex justify-between px-4 py-3", className)}
      key="close"
    >
      {children}
    </div>
  );
}

interface ScaleUpCloseButtonProps {
  className?: string;
}

function ScaleUpCloseButton({
  className,
}: ScaleUpCloseButtonProps): React.JSX.Element {
  const { closeScaleUp } = useScaleUp();

  return (
    <button
      aria-label="Close ScaleUp"
      className={cn("flex items-center", className)}
      onClick={closeScaleUp}
      type="button"
    >
      <X className="text-zinc-900 dark:text-zinc-100" size={16} />
    </button>
  );
}

interface ScaleUpSubmitButtonProps {
  className?: string;
  text?: string;
}

function ScaleUpSubmitButton({
  text = "Submit",
  className,
}: ScaleUpSubmitButtonProps): React.JSX.Element {
  return (
    <button
      aria-label={text}
      className={cn(
        "relative ml-1 flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800",
        className
      )}
      type="submit"
    >
      {text}
    </button>
  );
}

function ScaleUpHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.JSX.Element {
  return (
    <div
      className={cn(
        "px-4 py-2 font-semibold text-zinc-900 dark:text-zinc-100",
        className
      )}
    >
      {children}
    </div>
  );
}

function ScaleUpBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.JSX.Element {
  return <div className={cn("p-4", className)}>{children}</div>;
}

function ScaleUpButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}): React.JSX.Element {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-2 rounded-md px-4 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700",
        className
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export {
  ScaleUpRoot as Base,
  ScaleUpTrigger as Trigger,
  ScaleUpContent as Content,
  ScaleUpForm as Form,
  ScaleUpLabel as Label,
  ScaleUpTextarea as Textarea,
  ScaleUpFooter as Footer,
  ScaleUpCloseButton as Close,
  ScaleUpSubmitButton as Submit,
  ScaleUpHeader as Header,
  ScaleUpBody as Body,
  ScaleUpButton as Button,
};
