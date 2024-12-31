// src/types/custom-elements.d.ts
import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "l-grid": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      // Add other custom elements here as needed
    }
  }
}
