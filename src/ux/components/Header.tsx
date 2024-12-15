"use client";
import Image from "next/image";
import { Divide, Pivot as Hamburger } from "hamburger-react";
import { ThemeToggleButton } from "§comp/Theme";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Separator } from "@jackatdjl/djl-ui";

const MotionImage = motion.create(Image);
/**
 * To Be Moved
 * Just for testing purposes
 */
const Header: React.FC = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {screenSize.width > 1024 && <LG_Header />}
      {screenSize.width > 768 && screenSize.width <= 1024 && <MD_Header />}
      {screenSize.width <= 768 && <SM_Header />}
    </AnimatePresence>
  );
};

export default Header;

async function getUserAuth() {
  const response = await fetch("/api/auth", {
    method: "GET",
  });
  const data = await response.json();
  return {
    user: data.user,
    developer: data.developer,
  };
}

const LG_Header: React.FC = () => {
  const [user, setUser] = useState<{ user: string; developer: boolean } | null>(
    null
  );

  useEffect(() => {
    const fetchUserAuth = async () => {
      const authData = await getUserAuth();
      setUser(authData);
    };

    fetchUserAuth();
  }, []);

  return (
    <motion.header
      className="bg-l-sec-900 dark:bg-d-sec-900 text-l-txt dark:text-d-txt h-20 w-screen  sticky flex items-center top-0 p-1"
      initial={{ y: -100, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      layout
    >
      <motion.a href="/" className=" flex items-center top-0 p-1 duration-500">
        <MotionImage
          src={"/brand/Athe.png"}
          width={150}
          height={75}
          alt="Gymnasium Athenaeum Stade"
          className="p-2 pr-3 dark:invert"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          priority
        />
        <motion.p
          className="oxanium text-5xl pt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          /
        </motion.p>
        <MotionImage
          src={"/brand/SV.png"}
          width={75}
          height={75}
          alt="Student Council Athenaeum Stade"
          className="p-2"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          priority
        />
      </motion.a>
      <section className="flex items-center justify-around flex-grow px-7 duration-500">
        <motion.a
          href="/"
          className="font-xl nscience"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          Startseite
        </motion.a>
        <motion.a
          href="/robotik"
          className="font-xl nscience"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Robotik
        </motion.a>
        <motion.a
          href="/sv"
          className="font-xl nscience"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.5 }}
        >
          Öffnungszeiten
        </motion.a>
        {user?.developer && (
          <motion.a
            href="/admin"
            className="font-xl nscience"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            Admin
          </motion.a>
        )}
      </section>
      <motion.a
        href="/profile"
        className="right-3 flex items-center p-2 duration-500"
        layout
      >
        <div className="text-right p-1">
          <motion.p
            className="font-bold -my-1 text-xl text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.75 }}
          >
            Welcome back,
          </motion.p>
          <motion.p
            className="-my-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.65, duration: 0.75 }}
          >
            Username
          </motion.p>
        </div>
        <motion.div>
          <div
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          ></div>
        </motion.div>
      </motion.a>
    </motion.header>
  );
};

const MD_Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.header
      className="bg-l-sec-900 dark:bg-d-sec-900 text-l-txt dark:text-d-txt w-screen sticky top-0 p-1 z-10"
      initial={{ y: -100, opacity: 100 }}
      animate={{ y: 0, opacity: 1, height: isOpen ? "26rem" : "5rem" }}
      exit={{ y: -150, opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <section className=" top-0">
        <motion.div className="h-20 top-0 flex items-center justify-between w-screen">
          <motion.a
            href="/"
            className=" flex items-center top-0 p-1 duration-500"
          >
            <MotionImage
              src={"/brand/Athe.png"}
              width={150}
              height={75}
              alt="Gymnasium Athenaeum Stade"
              className="p-2 pr-3 dark:invert"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              priority
            />
            <motion.p
              className="oxanium text-5xl pt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              /
            </motion.p>
            <MotionImage
              src={"/brand/SV.png"}
              width={75}
              height={75}
              alt="Student Council Athenaeum Stade"
              className="p-2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              priority
            />
          </motion.a>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="right-2 top-1"
            >
              <Hamburger onToggle={setOpen} toggled={isOpen} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>
      <AnimatePresence>
        {isOpen && (
          <motion.main
            className="p-1 flex-row grow justify-center"
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              <motion.section
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 2 }}
                className="flex items-center justify-between p-3"
              >
                <div className="">
                  <motion.h2
                    className="px-1 oxanium text-xl"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    Welcome back,{" "}
                  </motion.h2>
                  <motion.h2
                    className="px-1 oxanium text-xl"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                  >
                    Username
                  </motion.h2>
                </div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div
                    style={{
                      height: "50px",
                      width: "50px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  ></div>
                </motion.div>
              </motion.section>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Separator />
              </motion.div>
              <motion.section className="w-screen flex h-60 items-center justify-center">
                <div className="grid grid-rows-6 grid-cols-5 h-60 w-screen p-4 ">
                  <AnimatePresence>
                    {isOpen && (
                      <>
                        <motion.div
                          className=" col-start-1 col-span-3 row-start-1 row-span-4 flex items-center justify-center border-l-acc dark:border-d-acc border-2 rounded-md p-2"
                          initial={{ opacity: 0, x: 10, y: 10 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          Startseite
                        </motion.div>
                        <motion.div
                          className=" col-start-4 col-span-2 row-start-1 row-span-4 flex items-center justify-center border-l-acc dark:border-d-acc border-2 rounded-md p-2"
                          initial={{ opacity: 0, x: -10, y: 10 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          Robotik
                        </motion.div>
                        <motion.div
                          className=" col-start-1 col-span-2 row-start-5 row-span-2 flex items-center justify-center border-l-acc dark:border-d-acc border-2 rounded-md p-2"
                          initial={{ opacity: 0, x: 10, y: -10 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          Öffnungszeiten
                        </motion.div>
                        <motion.div
                          className=" col-start-3 col-span-3 row-start-5 row-span-2 flex items-center justify-center border-l-acc dark:border-d-acc border-2 rounded-md p-2"
                          initial={{ opacity: 0, x: -10, y: -10 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          Über Uns
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </motion.section>
            </AnimatePresence>
          </motion.main>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const SM_Header: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.header
      className="bg-l-sec-900 dark:bg-d-sec-900 text-l-txt dark:text-d-txt w-screen sticky top-0 p-1 z-10"
      initial={{ y: -100, opacity: 100 }}
      animate={{ y: 0, opacity: 1, height: isOpen ? "50rem" : "5rem" }}
      exit={{ y: -150, opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <section className=" top-0">
        <motion.div className="h-20 top-0 flex items-center justify-between w-screen">
          <motion.a
            href="/"
            className=" flex items-center top-0 p-1 duration-500"
          >
            <MotionImage
              src={"/brand/Athe.png"}
              width={150}
              height={75}
              alt="Gymnasium Athenaeum Stade"
              className="p-2 pr-3 dark:invert"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              priority
            />
            <motion.p
              className="oxanium text-5xl pt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              /
            </motion.p>
            <MotionImage
              src={"/brand/SV.png"}
              width={75}
              height={75}
              alt="Student Council Athenaeum Stade"
              className="p-2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              priority
            />
          </motion.a>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="right-2 top-1"
            >
              <Hamburger onToggle={setOpen} toggled={isOpen} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>
      <AnimatePresence>
        {isOpen && (
          <motion.main
            className="p-1 flex-row grow justify-center"
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              <motion.section
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 2 }}
                className="flex items-center justify-between p-3"
              >
                <div className="">
                  <motion.h2
                    className="px-1 oxanium text-xl"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                  >
                    Welcome back,{" "}
                  </motion.h2>
                  <motion.h2
                    className="px-1 oxanium text-xl"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                  >
                    Username
                  </motion.h2>
                </div>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <div
                    style={{
                      height: "50px",
                      width: "50px",
                      backgroundColor: "white",
                      borderRadius: "50%",
                    }}
                  ></div>
                </motion.div>
              </motion.section>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Separator />
              </motion.div>
              <motion.section className="w-screen flex h-96 items-center justify-center">
                <div className="grid grid-rows-6 grid-cols-5 h-96 w-screen p-4 ">
                  <AnimatePresence>
                    {isOpen && (
                      <>
                        <motion.div
                          className=" col-start-1 col-span-3 row-start-1 row-span-4 flex items-center justify-center border-l-acc dark:border-d-acc border-2 rounded-md p-2"
                          initial={{ opacity: 0, x: 10, y: 10 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          Startseite
                        </motion.div>
                        <motion.div
                          className=" col-start-4 col-span-2 row-start-1 row-span-4 flex items-center justify-center border-l-acc dark:border-d-acc border-2 rounded-md p-2"
                          initial={{ opacity: 0, x: -10, y: 10 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        >
                          Robotik
                        </motion.div>
                        <motion.div
                          className=" col-start-1 col-span-2 row-start-5 row-span-2 flex items-center justify-center border-l-acc dark:border-d-acc border-2 rounded-md p-2"
                          initial={{ opacity: 0, x: 10, y: -10 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          Öffnungszeiten
                        </motion.div>
                        <motion.div
                          className=" col-start-3 col-span-3 row-start-5 row-span-2 flex items-center justify-center border-l-acc dark:border-d-acc border-2 rounded-md p-2"
                          initial={{ opacity: 0, x: -10, y: -10 }}
                          animate={{ opacity: 1, x: 0, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          Über Uns
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </motion.section>
              <motion.section>
                <ThemeToggleButton />
              </motion.section>
            </AnimatePresence>
          </motion.main>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
