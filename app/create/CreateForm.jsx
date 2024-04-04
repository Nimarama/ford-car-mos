"use client";

import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateForm() {
   const router = useRouter();
   const [title, setTitle] = useState("");
   const [price, setPrice] = useState("");
   const [horsepower, setHorsepower] = useState("");
   const [engine, setEngine] = useState("");
   const [topspeed, setTopspeed] = useState("");
   const [loading, setLoading] = useState(false);

   const handelSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      const model = {
         title,

      }
   };

   return (
      <form onSubmit={handelSubmit} className="w-1/2">
         <label>
            <span>Title:</span>
            <input required type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
         </label>
         <label>
            <span>Price:</span>
            <input required type="text" onChange={(e) => setPrice(e.target.value)} value={price} />
         </label>
         <label>
            <span>Horsepower:</span>
            <input
               required
               type="text"
               onChange={(e) => setHorsepower(e.target.value)}
               value={horsepower}
            />
         </label>
         <label>
            <span>Engine:</span>
            <input
               required
               type="text"
               onChange={(e) => setEngine(e.target.value)}
               value={engine}
            />
         </label>
         <label>
            <span>Topspeed:</span>
            <input
               required
               type="text"
               onChange={(e) => setTopspeed(e.target.value)}
               value={topspeed}
            />
         </label>
         <button disabled={loading}>
            {loading && <span>Adding...</span>}
            {!loading && <span>add model</span>}
         </button>
      </form>
   );
}
