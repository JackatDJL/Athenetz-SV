"use client";
import React from "react";
import LinkTip from "@jackatdjl/djl-ui/linktip";
import Button from "@jackatdjl/djl-ui/button";
import Loader from "@jackatdjl/djl-ui/loader";

export default function Page() {
  return (
    <div>
      <LinkTip href="https://example.com" tooltipText="Tiptool???">
        This is A Linked Tooltip Hover me!
      </LinkTip>
      <Button onClick={() => console.log("Button clicked!")}>
        Example Button
      </Button>
      <Loader type="squircle" />
      <h1>Welcome to my example page!</h1>
      <p>This is a bigger example for my package.</p>
    </div>
  );
}
