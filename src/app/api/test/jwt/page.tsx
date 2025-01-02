"use client";
import { account } from ">api/appwrite/init";
import { useState } from "react";

export default function Page() {
  const [jwt, setJWT] = useState("");
  const promise = account.createJWT();

  promise.then(
    (value) => {
      console.log(value.jwt);
      setJWT(value.jwt);
    },
    (reason) => {
      throw reason;
    }
  );

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {jwt}
    </div>
  );
}
