"use client";

import "./Navbar.css";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const LogoVariants = {
   hidden: {
      opacity: 0,
      x: "-100vw",
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         type: "spring",
         delay: 0.2,
         stiffness: 200,
      },
   },
};

const NavVariants = {
   hidden: {
      opacity: 0,
      x: "100vw",
   },
   visible: {
      opacity: 1,
      x: 0,
      transition: {
         type: "spring",
         delay: 0.2,
         stiffness: 200,
      },
   },
};

export default function Navbar() {
   const [isOn, setIsOn] = useState(false);

   const toggleSwitch = () => setIsOn(!isOn);

   const spring = {
      type: "spring",
      stiffness: 700,
      damping: 30,
   };
   return (
      <div>
         <nav className="dark:bg-black dark:border-[#f87c56]">
            <motion.div variants={LogoVariants} initial="hidden" animate="visible">
               <Link href="/" className="logo dark:text-white">
                  Ford
               </Link>
            </motion.div>

            <motion.div
               className="link dark:text-white"
               variants={NavVariants}
               initial="hidden"
               animate="visible"
               whileTap={{ scale: 0.9 }}
            >
               <Link href="/">Home</Link>
               <Link href="/about">About</Link>
               <Link href="/models">Models</Link>
               <Link href="/contact">Contact</Link>
            </motion.div>
            <ThemeToggle />
         </nav>
      </div>
   );
}
