"use client";
import { toast } from "sonner";
import { Button } from ">/button";
import { useEffect, useState } from "react";
import { ThemeToggleButton } from ">util/Theme";
import React from "react";
import Header from ">util/Header";

export default function Home() {
  const [value, setValue] = useState(1);
  const increment = () => {
    toast.info(`Toast ${value}`);
    setValue(value + 1);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/user", {
          method: "GET",
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data.user);
        } else {
          console.warn("Unauthorized");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <Header />
      <div className="w-screen h-screen flex items-center justify-center">
        <h1>No Content</h1>
        <Button onClick={increment}>Text</Button>
        <ThemeToggleButton />
      </div>
    </>
  );
}
