"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { fbauth } from "@athenetz-sv/api/firebase/firebase.js";

export default async function WelcomeUser() {
  const { toast } = await import("sonner");
  const [user, loading, error] = useAuthState(fbauth);
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
