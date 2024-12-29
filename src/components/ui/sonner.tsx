"use client";

import { Toaster as Sonner, toast } from "sonner";
import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- dont care it works
const Toaster = ({ ...props }) => {
  const theme =
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light";

  return (
    <Sonner
      className="toaster group"
      theme={theme}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
