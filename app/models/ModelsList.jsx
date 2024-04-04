"use client";
import Image from "next/image";
import "./ModelsList.css";
import { motion } from "framer-motion";
import Link from "next/link";

const hhVariants = {
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

const boVariants = {
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

async function getModels() {
   await new Promise((resolve) => setTimeout(resolve, 3000));
   const res = await fetch("http://localhost:4000/models", {
      next: {
         revalidate: 10,
      },
   });

   return res.json();
}

export default async function ModelsList() {
   const modelss = await getModels();
   return (
      <>
         {modelss.map((model) => (
            <div key={model.id} className="card">
               <motion.div variants={carVariants} initial="hidden" animate="visible">
                  <Image
                     src={model.img}
                     width={1000}
                     height={1000}
                     quality={100}
                     alt="car"
                     className="img"
                  />
               </motion.div>
               <motion.h3 variants={hhVariants} initial="hidden" animate="visible">
                  {model.title}
               </motion.h3>
               <motion.p variants={hhVariants} initial="hidden" animate="visible">
                  {model.Price}
               </motion.p>

               <Link href={`/models/${model.id}`}>Rade all.</Link>
            </div>
         ))}

         {modelss.length === 0 && <p>There are no models</p>}
      </>
   );
}
