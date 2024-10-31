"use client";

import UnderConstruction from "§comp/Homepage/UnderConstruction";
import LoggedOut from "§comp/Homepage/LoggedOut";
import LoggedIn from "§comp/Homepage/LoggedIn";
import { gk_Main } from "§api/flags";
import { fbauth } from "§api/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export default async function Decide() {
  const gkMain = await gk_Main();
  async function userexists(): Promise<boolean> {
    const [user, loading, error] = useAuthState(fbauth);
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  if (!gkMain) {
    return <UnderConstruction />;
  } else {
    if (await userexists()) {
      return <LoggedIn />;
    } else {
      return <LoggedOut />;
    }
  }
}