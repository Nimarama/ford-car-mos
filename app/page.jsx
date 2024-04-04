"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import car from "@/public/tinywow_change_bg_photo_49610441.png";
import "./home.css";

const textVariants = {
   hidden: {
      opacity: 0,
      y: "90vw",
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         type: "spring",
         delay: 0.3,
         stiffness: 200,
      },
   },
};

const texttVariants = {
   hidden: {
      opacity: 0,
      y: "-90vw",
   },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         type: "spring",
         delay: 0.3,
         stiffness: 200,
      },
   },
};

const carVariants = {
   hidden: {
      opacity: 0,
      rotate: 180,
      x: "90vw",
   },
   visible: {
      opacity: 1,
      rotate: 0,
      x: 0,
      transition: {
         type: "spring",
         delay: 0.2,
         stiffness: 200,
      },
   },
};

const boxVariants = {
   hidden: {
      opacity: 0,

      y: "-90vw",
   },
   visible: {
      opacity: 1,

      y: 0,
      transition: {
         type: "spring",
         delay: 0.2,
         stiffness: 200,
      },
   },
};

export default function Home() {
   return (
      <div className="paej1">
         <header>
            <div class="container header-container">
               <div class="header-left">
                  <motion.h1
                     className="dark:text-white dark:border-[#f87c56]"
                     variants={texttVariants}
                     initial="hidden"
                     animate="visible"
                  >
                     Ford <samp class="smok">Mustang</samp> 1969.
                  </motion.h1>
                  <motion.h3
                     className="dark:text-white"
                     variants={textVariants}
                     initial="hidden"
                     animate="visible"
                  >
                     Readfinde!
                  </motion.h3>
                  <motion.p
                     className="dark:text-white"
                     variants={textVariants}
                     initial="hidden"
                     animate="visible"
                  >
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis est illo
                     <br />
                     nisi magni ea distinctio ab quibusdam rem qui ex? Quisquam ipsum quaear <br />
                     sint eos alias rem sequi repellendus culpa?
                  </motion.p>
                  <motion.div variants={textVariants} initial="hidden" animate="visible">
                     <Link href="/about" class="btn dark:text-black  dark:bg-[#f87c56]">
                        Explore Cars
                     </Link>
                  </motion.div>
               </div>
               <div class="header-right">
                  <motion.div
                     class="sq-box"
                     variants={carVariants}
                     initial="hidden"
                     animate="visible"
                     whileTap={{ rotate: 180 }}
                  >
                     <Image src={car} alt="car" fill quality={100} />
                  </motion.div>
               </div>
            </div>
         </header>

         <motion.div className="boxall" variants={boxVariants} initial="hidden" animate="visible">
            <ul>
               <li className="dark:border-[#f87c56]">
                  <h1 className="dark:text-white">Horsepower</h1>
                  <p className="dark:text-white">535</p>
               </li>
               <li className="dark:border-[#f87c56]">
                  <h1 className="dark:text-white">Engine</h1>
                  <p className="dark:text-white">7.0L V8</p>
               </li>
               <li className="dark:border-[#f87c56]">
                  <h1 className="dark:text-white">Top speed</h1>
                  <p className="dark:text-white">140mph</p>
               </li>
               <li className="dark:border-[#f87c56]">
                  <h1 className="dark:text-white">Price</h1>
                  <p className="dark:text-white">$128,000</p>
               </li>
            </ul>
         </motion.div>
      </div>
   );
}
