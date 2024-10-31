"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { fbapp } from "@/ux/api/firebase/firebase";
import { getAuth } from "@firebase/auth";

const fbauth = getAuth(fbapp);

export default async function WelcomeUser() {
  const [user, loading, error] = useAuthState(fbauth);
  const { toast } = await import("sonner");
  const helloToast = typeof toast;
  if (!loading) {
    if (user) {
      toast.success("Welcome back" + user?.displayName, {
        id: helloToast,
      });
    } else {
      toast.info("Hello there", { id: helloToast });
    }
  } else {
    toast.loading("Loading your Data", {
      id: helloToast,
    });
  }
  if (error) {
    toast.error("An error occured: " + error, {
      id: helloToast,
    });
    console.error(error);
    throw new Error("An error occured: " + error);
  }
}

