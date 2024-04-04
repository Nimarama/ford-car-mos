"use clint";

import { useState, useEffect } from "react";
import { faMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Navbar.css";

const ThemeToggle = () => {
   const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") setDarkMode(true);
   }, []);

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add("dark");
         localStorage.setItem("theme", "dark");
      } else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
   }, [darkMode]);
   return (
      <div className="switch" data-isOn={darkMode} onClick={() => setDarkMode(!darkMode)}>
         <motion.div className="handle" layout transition={{ type: "spring" }} />
      </div>
   );
};

export default ThemeToggle;
