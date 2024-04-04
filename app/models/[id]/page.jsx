import Image from "next/image";
import "./ModelsTak.css";
import { notFound } from "next/navigation";

async function getModels(id) {
   await new Promise((resolve) => setTimeout(resolve, 3000));
   const res = await fetch("http://localhost:4000/models/" + id, {
      next: {
         revalidate: 60,
      },
   });

   if (!res.ok) {
      notFound();
   }

   return res.json();
}

export default async function ModelsTak({ params }) {
   const model = await getModels(params.id);
   return (
      <main>
         <div key={model.id} className="cardtak">
            <Image
               src={model.img}
               width={1000}
               height={1000}
               quality={100}
               alt="car"
               className="img"
            />
         </div>
         <div className="boxall">
            <ul>
               <li>
                  <h1>Horsepower</h1>
                  <p>{model.Horsepower}</p>
               </li>
               <li>
                  <h1>Engine</h1>
                  <p>{model.Engine}</p>
               </li>
               <li>
                  <h1>Top speed</h1>
                  <p>{model.Topspeed}</p>
               </li>
               <li>
                  <h1>Price</h1>
                  <p>{model.Price}</p>
               </li>
            </ul>
         </div>
      </main>
   );
}
