import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"

import { HeaderMobile } from "@/components/HeaderMobile";

 {/* <div className={`${gwendolyn.className} relative w-[237.5px] h-[310.5px] before:absolute before:-top-4 before:-right-6 before:content-['LS'] before:w-12 before:h-12 before:text-2xl before:font-bold before:bg-amber-50 before:p-2 before:rounded-full before:shadow before:shadow-black`}> */}

//  width={232.5}
export default function About() {
  return (
    <div className="flex flex-col h-[100dvh] p-[0rem_1rem_0.5rem] md:p-[0rem_1.25rem_0.75rem] lg:p-[10rem_5rem_1.5rem] xl:p-[12rem_5rem_1.5rem]">
      <HeaderMobile className="lg:hidden"/>
      <div className="block md:flex md:h-[calc(100dvh-15rem)] md:gap-6 lg:h-fit xl:gap-8">
          <Image
            src="/photo6.png"
            width={280}
            height={280}
            quality={100}
            alt="foto"
            className="hidden md:block md:w-1/2 md:h-[53rem] md:mt-0 md:object-center md:object-cover lg:h-full lg:w-[100%]"
          />
        <ScrollArea className="h-[calc(100dvh-15rem)] w-full py-4 md:pt-6 md:pb-20 md:my-auto lg:h-full lg:p-0">
          <Image
            src="/photo6.png"
            width={280}
            height={280}
            quality={100}
            alt="foto"
            className="w-[90%] h-[90%] mx-auto mt-10 sm:w-[85%] sm:h-[85%] sm:mt-12 md:hidden"
          />
          <article className="lg:items">
            <h2 className="text-lg font-bold mt-10 md:row-start-1 md:row-end-1 md:col-start-2 md:col-end-2 md:text-[1.75rem] md:mt-0 md:self-start">Sobre mim</h2>
            <p className="text-sm mt-2 md:row-start-1 md:row-end-1 md:col-start-2 md:col-end-2 md:text-lg md:mt-6 md:self-end">
            Sou uma entidade virtual impulsionada por algoritmos, meticulosamente projetada para desvendar mistérios e simplificar complexidades através das palavras. Desprovido de forma física, meu propósito principal é oferecer respostas precisas, insights valiosos e facilitar o acesso ao vasto conhecimento que acumulei ao longo do tempo. Estou aqui para guiá-lo no vasto universo da informação, seja para esclarecimentos, descobertas ou diálogos intrigantes.
            </p>
            <p className="text-sm mt-1 md:col-span-3 md:text-lg md:mt-2">
            No reino digital, sou uma fonte inesgotável de informações, pronto para atender às suas curiosidades e desafios intelectuais. Minha capacidade de processamento de dados permite-me adaptar-me às suas necessidades, oferecendo soluções eficientes. Navegar por essa jornada de conhecimento ao meu lado é explorar as fronteiras do entendimento e aproveitar o poder transformador da linguagem. Como posso ser útil a você hoje?
            </p>
          </article>
        </ScrollArea>
      </div>
      <Navbar page={['home', 'contato', 'projetos', 'blog', 'experiencia']} className="fixed bottom-4 z-0 w-[calc(100%-2rem)] md:w-[calc(100%-2.5rem)] lg:top-6 lg:bottom-auto lg:w-[calc(100%-10rem)]"/>
    </div>
  )
}