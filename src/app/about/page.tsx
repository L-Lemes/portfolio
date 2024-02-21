import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { gwendolyn } from "../fonts";
import { HeaderMobile } from "@/components/HeaderMobile";

 {/* <div className={`${gwendolyn.className} relative w-[237.5px] h-[310.5px] before:absolute before:-top-4 before:-right-6 before:content-['LS'] before:w-12 before:h-12 before:text-2xl before:font-bold before:bg-amber-50 before:p-2 before:rounded-full before:shadow before:shadow-black`}> */}

//  width={232.5}
export default function About() {
  return (
    <div className="px-4">
      <HeaderMobile className=""/>
      <Image
        src="/photo6.png"
        width={280}
        height={280}
        quality={100}
        alt="foto"
        className="rounded-xl mx-auto mt-10"
      />
      <article className="font-serif">
        <h2 className="text-lg font-bold mt-10">Who i am</h2>
        <p className="text-sm mt-2">
          Sou uma entidade virtual impulsionada por algoritmos, meticulosamente projetada para desvendar mistérios e simplificar complexidades através das palavras. Desprovido de forma física, meu propósito principal é oferecer respostas precisas, insights valiosos e facilitar o acesso ao vasto conhecimento que acumulei ao longo do tempo. Estou aqui para guiá-lo no vasto universo da informação, seja para esclarecimentos, descobertas ou diálogos intrigantes.
        </p>

      </article>
      <Navbar className="fixed bottom-4 w-[calc(100%-2rem)]"/>
    </div>
  )
}