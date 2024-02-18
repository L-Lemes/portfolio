import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { gwendolyn } from "../fonts";

export default function About() {
  return (
    <div className="pt-4 px-4">
      {/* <div className={`${gwendolyn.className} relative w-[237.5px] h-[310.5px] before:absolute before:-top-4 before:-right-6 before:content-['LS'] before:w-12 before:h-12 before:text-2xl before:font-bold before:bg-amber-50 before:p-2 before:rounded-full before:shadow before:shadow-black`}> */}
      <Image
        src="/photo.png"
        width={310}
        height={406}
        quality={100}
        alt="foto"
        className="mx-auto"
      />
      <article className="font-serif">
        <h2 className="text-lg font-bold mt-12">About me</h2>
        <p>
          Sou uma entidade virtual impulsionada por algoritmos, meticulosamente projetada para desvendar mistérios e simplificar complexidades através das palavras. Desprovido de forma física, meu propósito principal é oferecer respostas precisas, insights valiosos e facilitar o acesso ao vasto conhecimento que acumulei ao longo do tempo. Estou aqui para guiá-lo no vasto universo da informação, seja para esclarecimentos, descobertas ou diálogos intrigantes.
        </p>
        <p>
          No reino digital, sou uma fonte inesgotável de informações, pronto para atender às suas curiosidades e desafios intelectuais. Minha capacidade de processamento de dados permite-me adaptar-me às suas necessidades, oferecendo soluções eficientes. Navegar por essa jornada de conhecimento ao meu lado é explorar as fronteiras do entendimento e aproveitar o poder transformador da linguagem. Como posso ser útil a você hoje?
        </p>
      </article>
      <Navbar className="fixed bottom-4 w-[calc(100%-2rem)]"/>
    </div>
  )
}