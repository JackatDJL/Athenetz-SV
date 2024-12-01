"use client";

import UnderConstruction from "§comp/Homepage/UnderConstruction";
import LoggedOut from "§comp/Homepage/LoggedOut";
import LoggedIn from "§comp/Homepage/LoggedIn";
import { gk_Main } from "§api/flags";
import { fbauth } from "§api/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

function useUserExists() {
  const [user, loading, error] = useAuthState(fbauth!);
  return !!user;
}

async function GATEKEEPER(what: string) {
  const GGgk_Main = gk_Main();
  switch (what) {
    case "main":
      return await GGgk_Main;
    default:
      return false;
  }
}

export default async function Decide() {
  const [isUserExists, setIsUserExists] = useState(false);
  const gkMain = await GATEKEEPER("main");
  
  useEffect(() => {
    setIsUserExists(useUserExists());
  }, []);

  if (!gkMain) {
    return <UnderConstruction />;
  } else {
    if (isUserExists) {
      return <LoggedIn />;
    } else {
      return <LoggedOut />;
    }
  }
}