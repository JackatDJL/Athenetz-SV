"use client";
import { ThemeToggleButton } from ">util/Theme";
import { motion } from "framer-motion";
import { grid } from "ldrs";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import { toast } from "sonner";
import { account } from ">api/appwrite/init";
import { navigate } from ">api/navigate";
import { Button } from ">/button";
import * as Inputs from ">/inputs";

export default function VerifyPage() {
  grid.register();
  const params = useSearchParams();

  const userid = params.get("userId");
  const secret = params.get("secret");

  function finalizeReset(
    newpassword: string,
    newpasswordrepeat: string,
    uid: string,
    secret: string
  ) {
    const ttoast = toast.loading("Kommuniziere mit Server...", {
      duration: Infinity,
    });

    if (newpassword !== newpasswordrepeat) {
      toast.error("Überprüfe ob du dich nicht Vertippt hast", {
        id: ttoast,
        duration: 5000,
      });
      return;
    }
    if (!newpassword) {
      toast.error("Samma, du musst auch was eintippen", {
        id: ttoast,
        duration: 5000,
      });
      return;
    }

    const promise = account.updateRecovery(uid, secret, newpassword);

    promise.then(
      () => {
        toast.success("Passwort Geändert", { id: ttoast, duration: 5000 });
        navigate("/");
      },
      (reason) => {
        if (reason.message == "Invalid token passed in the request.") {
          toast.warning("Dein link scheint nicht zu Passen", {
            action: {
              label: "Nochmal Senden",
              onClick: () => {
                navigate("/login/reset");
              },
            },
            id: ttoast,
          });
          navigate("/");
        } else if (
          reason.message ==
          "The password you are trying to use is similar to your previous password. For your security, please choose a different password and try again."
        ) {
          toast.warning(
            "Das Passwort, das Sie verwenden möchten, ähnelt Ihrem vorherigen Passwort. Wählen Sie aus Sicherheitsgründen ein anderes Passwort und versuchen Sie es erneut.",
            { id: ttoast, duration: 5000 }
          );
          return;
        } else if (
          reason.message ==
          "Invalid `password` param: Password must be between 8 and 265 characters long, and should not be one of the commonly used password."
        ) {
          toast.warning(
            "Samma, Gratulation, du hast das Sicherheitslotto verloren. Versuchs doch mal mit etwas, das nicht jeder benutzt!",
            { id: ttoast, duration: 5000 }
          );
        } else {
          toast.error(reason.message, { id: ttoast, duration: 5000 });
          toast.info(
            "Sorry an unexpected Error occured, it has ben automaticly reported to our servers",
            { duration: 2000 }
          );
          navigate("/");
          throw reason;
        }
      }
    );
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newpass = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const passrepeat = (event.currentTarget.elements[2] as HTMLInputElement)
      .value;
    if (userid && secret) {
      finalizeReset(newpass, passrepeat, userid, secret);
    } else {
      navigate("/");
      return;
    }
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
              <Inputs.Password
                placeholder="Neues Passwort"
                className="w-full"
              />
              <Inputs.Password
                placeholder="Passwort Wiederhohlen"
                className="w-full"
              />
              <Button type="submit">Zurücksetzen</Button>
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
