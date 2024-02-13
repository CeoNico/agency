"use client";
import { useState } from "react";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import { navLinks } from "@/const";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = () => {
    setOpenMenu(!openMenu);
  };

  const closeNav = () => {
    openMenu(!setOpenMenu);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },

    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },

    exit: {
      scaleY: 0,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <nav className="w-full h-24 flex items-center">
        <Link href="/">
          <h1 className="text-white font-bold text-xl lg:text-2xl ml-2 lg:pr-5 hover:text-gray-500 ease-in-out duration-300 transition">
            BackendExcellence
          </h1>
        </Link>
        <div className="hidden lg:flex w-full justify-center items-center">
          <div className="rounded-full bg-slate-950/35 flex items-center justify-evenly border w-[80%] h-10 border-gray-300 font-bold text-lg">
            {navLinks.map((link) => (
              <Link
                className="hover:text-orange-500 transition duration-300 text-white"
                key={link.href}
                href={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button className=" p-2 ml-5 border text-white  hover:bg-white hover:text-black hover:shadow-white/50 hover:shadow-lg hover:-translate-y-1 transition duration-200 ">
            <Link href="/">Aprende Mas Aqui</Link>
          </button>
        </div>
        <button
          onClick={handleChange}
          className="ml-auto p-5 text-white md:hidden"
        >
          {openMenu ? <HiOutlineX size={30} /> : <HiBars3 size={30} />}
        </button>
      </nav>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            transition="exit"
            exit="exit"
            className="origin-top flex font-bold gap-2 text-3xl flex-col items-center justify-center h-screen -mt-44"
          >
            {navLinks.map((link) => (
              <motion.div 
              key={link.href}
              initial={{opacity: 0}}
              animate={{opacity:1,transition: {duration:1, delay:0.5}}}
              exit={{opacity:0, transition:{duration:0.7,}}} className="overflow-hidden">
                <motion.a>
                  <Link
                    className="hover:text-orange-300 transition duration-300 text-white"
                    key={link.href}
                    href={link.label}
                  >
                    {link.label}
                  </Link>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
