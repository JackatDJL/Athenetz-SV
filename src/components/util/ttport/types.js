/* eslint-disable */
import {
  Dispatch,
  ComponentType,
  SetStateAction,
  ComponentProps,
  MouseEventHandler,
  ReactNode,
} from "react";

export const ReactTag = [
  "keyof JSX.IntrinsicElements",
  "ComponentType<any>",
  "string",
];

export const ToggleProps = (TTag) => {
  return {
    ...BaseToggleProps(TTag),
    ...(TTag === "keyof JSX.IntrinsicElements"
      ? ComponentProps(TTag)
      : TTag === "ComponentType<any>"
      ? ComponentProps(TTag)
      : {}),
  };
};

export const BaseToggleProps = (TTag) => {
  return {
    ...CoreHTMLProps(TTag),
    toggled: boolean,
    as: TTag,
    onToggle: () => {},
    duration: number,
    reversed: boolean,
    forceMotion: boolean,
    idPrefix: string,
    svgProps: ComponentProps("svg"),
  };
};

export const CoreHTMLProps = (TTag) => {
  return {
    onClick: MouseEventHandler(TTag),
    className: string,
    title: string,
    type: string,
    children: ReactNode,
    "aria-label": string,
  };
};
