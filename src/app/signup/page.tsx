"use client";
import { account } from ">api/appwrite/init";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { motion } from "motion/react";
import { ThemeToggleButton } from ">util/Theme";
import * as Inputs from ">/inputs";
import { Button } from ">/button";
import { ID } from "appwrite";
import { toast } from "sonner";
import { navigate } from ">api/navigate";

export default function SignUpPage() {
  const isLoggedIn = async () => {
    const checkToast = toast.loading("Connecting to Identity Plattform", {
      duration: Infinity,
    });
    const promise = account.get();

    promise.then(
      function () {
        toast.info("Samma, du bist ja schon Angemeldet!", {
          id: checkToast,
          duration: 5000,
        });
        navigate("/");
      },
      function (error) {
        if (error.message == "User (role: guests) missing scope (account)") {
          toast.dismiss(checkToast);
          navigate("/");
        } else {
          toast.error(error.message, { id: checkToast, duration: 5000 });
          toast.info(
            "Sorry an unexpected Error occured, it has ben automaticly reported to our servers"
          );
          navigate("/");
          throw error;
        }
      }
    );
  };
  useEffect(() => {
    isLoggedIn();
  }, []);

  function verify() {
    const checkpromise = account.get();

    checkpromise.then((user) => {
      if (!user.emailVerification) {
        const ttoast = toast.loading("Sende verifizierungs Email...", {
          duration: Infinity,
        });

        const promise = account.createVerification(
          "https://athe-sv.vercel.app/signup/verify"
        );

        promise.then(
          () => {
            toast.success("Verifizierungs Email gesendet", {
              id: ttoast,
              duration: 5000,
              action: {
                label: "Zu Athenetz",
                onClick: () => {
                  navigate("https://athenetz.de/iserv/mail");
                },
              },
            });
          },
          (reason) => {
            toast.error(reason.message, { id: ttoast, duration: 5000 });
            toast.info(
              "Sorry an unexpected Error occured, it has ben automaticly reported to our servers"
            );

            throw reason;
          }
        );
      }
    });
  }

  function signUp(email: string, password: string, name: string) {
    const ttoast = toast.loading("Komuniziere mit Server...", {
      duration: Infinity,
    });
    email = email + "@athenetz.de";
    const promise = account.create(ID.unique(), email, password, name);

    promise.then(
      function () {
        toast.success("Registriert!", { id: ttoast, duration: 5000 });
        navigate("/");
        verify();
      },
      function (error) {
        if (
          error.message ==
          "Invalid `password` param: Password must be between 8 and 265 characters long, and should not be one of the commonly used password."
        ) {
          toast.warning(
            "Samma, Gratulation, du hast das Sicherheitslotto verloren. Versuchs doch mal mit etwas, das nicht jeder benutzt!"
          );
        } else {
          toast.error(error.message, { id: ttoast, duration: 3000 });
        }
      }
    );
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dname = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const email = (event.currentTarget.elements[1] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[2] as HTMLInputElement)
      .value;
    signUp(email, password, dname);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen flex flex-col">
        <section className="flex items-start p-4 h-0">
          <Link className="flex items-center" href="/" prefetch>
            <ArrowLeft />
            <p className="ml-1 flex items-center justify-center">Back</p>
          </Link>
        </section>
        <main className="flex-1 flex items-center justify-center">
          <motion.section className="border-2 rounded-xl border-accent bg-card w-3/4 lg:w-1/2 xl:w-1/3 h-4/5 lg:h-3/4 duration-200 flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center justify-center gap-4"
            >
              <h2 className="bdefault text-5xl">Sign Up</h2>
              <Inputs.Default placeholder="Name" />
              <div className="group flex h-10 w-full rounded-md border border-ring bg-background text-sm ring-offset-d-bg dark:ring-offset-background focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:outline-none duration-700">
                <input
                  className="flex-1 px-3 py-2 rounded-l-md bg-transparent placeholder:text-muted-foreground focus:outline-none"
                  type="name"
                  placeholder="user.name"
                />
                <div className="bg-gray-300 dark:bg-gray-800 px-4 py-2 rounded-r-md">
                  @athenetz.de
                </div>
              </div>

              <Inputs.Password placeholder="Passwort" className="w-full" />
              <Button type="submit">Sign Up</Button>
            </form>
          </motion.section>
        </main>
        <motion.section className="flex items-end justify-start p-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1.1, x: 4, y: 0 }}
            whileHover={{ scale: 1.5, x: 5, y: 1 }}
            whileTap={{ scale: 1.25 }}
          >
            <ThemeToggleButton />
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
