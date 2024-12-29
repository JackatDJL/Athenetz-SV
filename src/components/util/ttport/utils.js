import { forwardRef } from "react";

export function forwardRefWithAs(component) {
  return Object.assign(forwardRef(component), {
    displayName: component.displayName ?? component.name,
  });
}
