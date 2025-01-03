"use client";
import { ThemeToggleButton } from ">util/Theme";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import { toast } from "sonner";
import { useEffect } from "react";
import { account } from ">api/appwrite/init";
import { navigate } from ">api/navigate";
import { SkewLoader } from "react-spinners";

export default function Page() {
  const params = useSearchParams();

  const userid = params.get("userId");
  const secret = params.get("secret");

  function verify(userId?: string, secret?: string) {
    if (!secret) {
      navigate("/");
      return;
    }
    if (!userId) {
      navigate("/");
      return;
    }
    const ttoast = toast.loading("Kommuniziere mit dem Server...", {
      duration: Infinity,
    });

    const promise = account.updateVerification(userId, secret);

    promise.then(
      () => {
        toast.success("Verifiziert", { id: ttoast, duration: 5000 });
        navigate("/");
      },
      (reason) => {
        if (reason.message == "Invalid token passed in the request.") {
          toast.warning("Dein link scheint nicht zu Passen", {
            action: {
              label: "Nochmal Senden",
              onClick: resend,
            },
            id: ttoast,
          });
          navigate("/");
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

  function resend() {
    const checkpromise = account.get();

    checkpromise.then((user) => {
      if (!user.emailVerification) {
        const ttoast = toast.loading("Sende verifizierungs Email...", {
          duration: Infinity,
        });

        const promise = account.createVerification(
          "https://athe-sv.vercel.app/api/auth/verify"
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
            navigate("/");
          },
          (reason) => {
            toast.error(reason.message, { id: ttoast, duration: 5000 });
            toast.info(
              "Sorry an unexpected Error occured, it has ben automaticly reported to our servers"
            );
            navigate("/");
            throw reason;
          }
        );
      }
    });
  }
  useEffect(() => {
    if (userid && secret) {
      verify(userid, secret);
    }
  });

  return (
    <div className="absolute top-0 left-0 w-full h-screen flex flex-col">
      <section className="flex items-start p-4 h-0">
        <Link className="flex items-center" href="/" prefetch>
          <ArrowLeft />
          <p className="ml-1 flex items-center justify-center">Back</p>
        </Link>
      </section>
      <main className="flex-1 flex items-center justify-center">
        <motion.section className="border-2 rounded-xl border-accent bg-card w-3/4 lg:w-1/2 xl:w-1/3 h-4/5 lg:h-3/4 duration-200 flex items-center justify-center">
          <SkewLoader />
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
  );
}
