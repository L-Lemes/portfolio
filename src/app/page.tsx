import Image from "next/image";

import { gwendolyn } from "./fonts";

export default function Home() {
  return (
    <div className="p-[5rem_1rem_0.5rem]">
      <h1 className="font-bold text-4xl font-serif text-center">Lucas L. Borges</h1>
      <div className="w-fit mx-auto uppercase tracking-12 mt-16 mb-24">

        <h2 className={`${gwendolyn.className} inline text-3xl w-fit pl-8 mr-3 `}>ls</h2>
        <p className="inline">O bom humor é a unica</p>
        <p className="">qualidade divina do homem</p>
      </div>
    </div>
  );
}
