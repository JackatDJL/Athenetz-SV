import React from "react";
interface UIProviderProps {
  kitId: string;
}

function UIProvider({ kitId }: UIProviderProps): React.JSX.Element {
  return (
    <link href={`https://use.typekit.net/${kitId}.css`} rel="stylesheet" />
  );
}

export default UIProvider;
