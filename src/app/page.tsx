"use client";

import { ThemeToggleButton } from "@components/Theme";
import WelcomeUser from "@pre/functions/welcomeUser";
import {
  FloatingPanelRoot,
  FloatingPanelTrigger,
  FloatingPanelContent,
  FloatingPanelForm,
  FloatingPanelTextarea,
  FloatingPanelFooter,
  FloatingPanelCloseButton,
  FloatingPanelSubmitButton,
} from "@layout/FloatingPanel";
import { Tooltip } from "@layout/Tooltip";
import * as Toggle from "@ui/Toggle";
// eslint-disable-next-line no-redeclare
import React from "react";
import { toast } from "sonner";

export default function Home() {
  WelcomeUser();
  return (
    <main className="bg-l-bg dark:bg-d-bg border border-l-acc h-screen w-screen">
      <section className="flex flex-col items-center justify-center ">
        <div className="flex py-2">
          <h1 className="bshade">Hello, This Website is Currently under Construction!</h1>
        </div>
        <div className="flex flex-row">
          <p className="p">By</p>
          <p className="oxanium p">Jack@DJL</p>
        </div>
        <div className="relative bottom-5 left-5">
          <FloatingPanelExample2Pre />
        </div>
      </section>
      <section className="absolute bottom-1 left-2">
        <ThemeToggleButton />
      </section>
    </main>
  );
}

function FloatingPanelExample2Pre() {
  const handleSubmit = (note: string) => {
    console.log("Submitted Review:", note, "Rating: ", value);
    toast.info("Submitted Review: " + note + " Rating: " + value);
  };
  const [value, setValue] = React.useState("3");
  return (
    <>
      <FloatingPanelRoot>
        <FloatingPanelTrigger title="Review?">❤</FloatingPanelTrigger>
        <FloatingPanelContent>
          <FloatingPanelForm onSubmit={handleSubmit}>
            <Toggle.Group
              type="single"
              value={value}
              onValueChange={(value) => {
                if (value) setValue(value);
              }}
            >
              <Toggle.Item value="5">❤</Toggle.Item>
              <Toggle.Item value="4">👍</Toggle.Item>
              <Toggle.Item value="3">😐</Toggle.Item>
              <Toggle.Item value="2">👎</Toggle.Item>
              <Toggle.Item value="1">💔</Toggle.Item>
            </Toggle.Group>
            <Tooltip
              align="center"
              side="bottom"
              tips={<FloatingPanelTextarea id="more-input" />}
            >
              Do you want to Tell us more?
            </Tooltip>
            <FloatingPanelFooter>
              <FloatingPanelCloseButton />
              <FloatingPanelSubmitButton />
            </FloatingPanelFooter>
          </FloatingPanelForm>
        </FloatingPanelContent>
      </FloatingPanelRoot>
    </>
  );
}
