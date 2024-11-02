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

export default function Decide() {
  const [isUserExists, setIsUserExists] = useState(false);
  const gkMain = gk_Main();

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