"use client";

import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FB_APPID,
  measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENTID,
};

if (typeof window !== "undefined" && !getApps().length) {
  initializeApp(firebaseConfig);
}

const fbapp = typeof window !== "undefined" ? getApp() : null;
const fstore = typeof window !== "undefined" ? getFirestore() : null;
const fbauth = typeof window !== "undefined" ? getAuth(fbapp) : null;

// App Check
if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

if (
  typeof window !== "undefined" &&
  window.location.hostname === "b48kz8qg-3000.euw.devtunnels.ms"
) {
  globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

let fbappcheckinstance = null;

if (
  typeof window !== "undefined" &&
  process.title == "browser" &&
  !fbappcheckinstance
) {
  import("firebase/app-check").then(async (firebaseAppCheck) => {
    const recv3token = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_PUBLIC_KEY;
    fbappcheckinstance = firebaseAppCheck.initializeAppCheck(fbapp, {
      provider: new firebaseAppCheck.ReCaptchaV3Provider(recv3token),
      isTokenAutoRefreshEnabled: true,
    });
  });
}

export { fbapp, fstore, fbauth };
