import Image from "next/image";

import { gwendolyn } from "./fonts";
import { Navbar } from "./components/Navbar";
import { FeaturedProject } from "./components/FeaturedProject";

// h-[calc(100vh-5.5rem)] w-[calc(100vw-2rem)]

export default function Home() {
  return (
    <div className="relative z-[-1] flex flex-col h-screen w-full p-[5rem_1rem_0.5rem]">
      <h1 className="font-bold text-4xl font-serif text-center">
        Lucas L. Borges
      </h1>
      <div className="w-fit mx-auto uppercase tracking-12 mt-16 mb-24 text-center">
        <h2 className={`${gwendolyn.className} text-3xl font-bold mb-1`}>ls</h2>
        <p className="mb-1">O bom humor é a unica</p>
        <p className="">qualidade divina do homem</p>
      </div>
      <Navbar/>
      <FeaturedProject/>
    </div>

  );
}
