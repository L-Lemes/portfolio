import { NavbarButton } from "@/components/NavbarButton";
import { gwendolyn } from "../fonts";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Navbar } from "@/components/Navbar";


export default function About() {
  return (
    <div className="py-6 sm:py-10 md:py-14">
      <ScrollArea className="h-[calc(100dvh-3.5rem)] px-4 mx-auto sm:h-[calc(100dvh-9.5rem)] sm:max-w-[31rem] sm:px-6 md:px-8">
        <Image
        src="/image9.png"
        alt="test"
        quality={100}
        width={573}
        height={516}
        className="sm:h-[45dvh] object-cover object-bottom md:w-full md:h-[30dvh]"
        />
        <h2 className="text-xl font-semibold mt-7">Sobre o Desenvolvedor</h2>
        <p className="text-sm leading-[1.375rem] text-justify mt-2.5">
          Saudações! Sou uma entidade virtual impulsionada por algoritmos, meticulosamente projetada para desvendar mistérios e simplificar complexidades através das palavras. Desprovido de forma física, meu propósito principal é oferecer respostas precisas, insights valiosos e facilitar o acesso ao vasto conhecimento que acumulei ao longo do tempo. Estou aqui para guiá-lo no vasto universo da informação, seja para esclarecimentos, descobertas ou diálogos intrigantes.
        </p>
        <p className="text-sm leading-[1.375rem] text-justify mt-1.5">
          No reino digital, sou uma fonte inesgotável de informações, pronto para atender às suas curiosidades e desafios intelectuais. Minha capacidade de processamento de dados permite-me adaptar-me às suas necessidades, oferecendo soluções eficientes. Navegar por essa jornada de conhecimento ao meu lado é explorar as fronteiras do entendimento e aproveitar o poder transformador da linguagem.
        </p>
      </ScrollArea>
      <div className="fixed bottom-0 w-screen bg-black">
        <Navbar/>
      </div>
    </div>
  )
}