"use client";
import { account } from ">api/appwrite/init";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft } from "react-feather";
import { motion } from "motion/react";
import { ThemeToggleButton } from ">util/Theme";
import { SkewLoader } from "react-spinners";
import { toast } from "sonner";
import { navigate } from ">api/navigate";

export default function LoginPage() {
  const isLoggedIn = async () => {
    const checkToast = toast.loading("Connecting to Identity Plattform", {
      duration: Infinity,
    });
    const promise = account.get();

    promise.then(
      function () {
        toast.loading("Telling Server to kill Session", { id: checkToast });
        const promise = account.deleteSession("current");

        promise.then(
          () => {
            toast.success("Abgemeldet", { id: checkToast, duration: 5000 });

            navigate("/");
          },
          (reason) => {
            toast.error(reason.message, { id: checkToast, duration: 5000 });
            toast.info(
              "Sorry an unexpected Error occured, it has ben automaticly reported to our servers"
            );
            navigate("/");
            throw reason;
          }
        );
      },
      function (error) {
        if (error.message == "User (role: guests) missing scope (account)") {
          toast.warning("Du bist garnicht angemeldet!", {
            id: checkToast,
            duration: 800,
          });

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
    </>
  );
}
