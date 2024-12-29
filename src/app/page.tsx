"use server";
import config from "§";
import WIP from ">comp/WIP";
import DHome from ">comp/home/default";

export default async function Home() {
  if (config.wip) {
    return <WIP />;
  } else {
    return <DHome />;
  }
}
