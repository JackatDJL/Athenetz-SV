"use client";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { navigate } from ">api/navigate";
import { account } from ">api/appwrite/init";
import { ArrowLeft } from "react-feather";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from ">/button";
import { ThemeToggleButton } from ">util/Theme";

export default function Reset() {
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

  const [submitDisabled, setSubmitDisabled] = useState(false);

  function reset(email: string) {
    const ttoast = toast.loading("Kommuniziere mit Server...", {
      duration: Infinity,
    });
    email = email + "@athenetz.de";

    const promise = account.createRecovery(
      email,
      "https://athe-sv.vercel.app/login/reset/verify"
    );

    promise.then(
      () => {
        toast.success("Email zum Zurücksetzen gesendet", {
          id: ttoast,
          duration: 5000,
          action: {
            label: "Zu Athenetz",
            onClick: () => {
              navigate("https://athenetz.de/iserv/mail");
            },
          },
        });
        navigate("/");
      },
      (reason) => {
        if (
          reason.message ==
          "Invalid `email` param: Value must be a valid email address"
        ) {
          toast.warning("Bitte gib deinen richtigen Benutzernamen an!", {
            id: ttoast,
            duration: 5000,
          });
          setSubmitDisabled(false);
        } else {
          toast.error(reason.message, { id: ttoast, duration: 5000 });
          toast.info(
            "Sorry an unexpected Error occured, it has ben automaticly reported to our servers"
          );
          navigate("/");
          throw reason;
        }
      }
    );
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitDisabled(true);
    const email = (event.currentTarget.elements[0] as HTMLInputElement).value;
    reset(email);
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
              className="flex flex-col items-center justify-center gap-4"
              onSubmit={handleSubmit}
            >
              <h2 className="bdefault text-3xl">Passwort Zurücksetzen</h2>
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

              <Button type="submit" disabled={submitDisabled}>
                Email Senden
              </Button>
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
