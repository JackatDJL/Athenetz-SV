"use client";

// eslint-disable-next-line no-redeclare
import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "react-feather";

import { cn } from "§util/twm";
import { Dialog, DialogWrapper } from "§lt/Dialog";
import { Preset } from "§lt/Popup";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive> & {
    passthrough?: boolean;
  }
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md duration-700 bg-l-bg-200 dark:bg-d-bg-800 text-l-txt dark:text-d-txt-100 border border-l-acc dark:border-d-acc",
      "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium duration-700 [&_[cmdk-group-heading]]:text-l-prim dark:[&_[cmdk-group-heading]]:text-d-prim [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {
  trigger: string;
  triggervariant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost";
}

const asDialog = ({
  children,
  trigger,
  triggervariant,
  ...props
}: CommandDialogProps) => {
  return (
    <DialogWrapper trigger={trigger} triggervariant={triggervariant}>
      <Dialog className="overflow-hidden p-0 shadow-lg" {...props}>
        <Command
          passthrough
          className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium duration-700 [&_[cmdk-group-heading]]:text-l-prim dark:[&_[cmdk-group-heading]]:text-d-prim [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
        >
          {children}
        </Command>
      </Dialog>
    </DialogWrapper>
  );
};

const asPopup = ({
  children,
  trigger,
  triggervariant,
  ...props
}: CommandDialogProps) => {
  return (
    <Preset trigger={trigger} triggervariant={triggervariant}>
      <Command
        passthrough
        className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium duration-700 [&_[cmdk-group-heading]]:text-l-prim dark:[&_[cmdk-group-heading]]:text-d-prim [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
        {...props}
      >
        {children}
      </Command>
    </Preset>
  );
};

const Input = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none duration-700 placeholder:text-l-sec-400 dark:placeholder:text-d-sec disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

Input.displayName = CommandPrimitive.Input.displayName;

const List = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

List.displayName = CommandPrimitive.List.displayName;

const Empty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));

Empty.displayName = CommandPrimitive.Empty.displayName;

const Group = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-l-txt dark:text-d-txt duration-700 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-l-sec-300 dark:[&_[cmdk-group-heading]]:text-d-sec",
      className,
    )}
    {...props}
  />
));

Group.displayName = CommandPrimitive.Group.displayName;

const Separator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(
      "-mx-1 h-px bg-l-bg-600 duration-700 dark:bg-d-bg-300",
      className,
    )}
    {...props}
  />
));
Separator.displayName = CommandPrimitive.Separator.displayName;

const Item = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none duration-700 aria-selected:bg-l-acc dark:aria-selected:bg-d-acc aria-selected:text-l-txt-700 dark:aria-selected:text-d-txt-400 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  />
));

Item.displayName = CommandPrimitive.Item.displayName;

const Shortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-s tracking-widest font-bold text-l-txt-500 dark:text-slate-100 duration-700",
        className,
      )}
      {...props}
    />
  );
};
Shortcut.displayName = "CommandShortcut";

export {
  Command as Base,
  asDialog,
  asPopup,
  Input,
  List,
  Empty,
  Group,
  Item,
  Shortcut,
  Separator,
};
