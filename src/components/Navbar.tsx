import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export const Navbar = () => {
  return (
    <Carousel className="w-full p-4 px-10 bg-black text-white drop-shadow-navbar">
      <CarouselPrevious />
      <CarouselContent className="text-xs">
        <CarouselItem className="basis-1/3 text-center uppercase">
          <Link href={"/"} className="tracking-2">Início</Link>
        </CarouselItem>
        <CarouselItem className="basis-1/3 text-center uppercase">
          <Link href={"/sobre"} className="tracking-2">Sobre</Link>
        </CarouselItem>
        <CarouselItem className="basis-1/3 text-center uppercase">
          <Link href={"/contato"} className="tracking-2">Contato</Link>
        </CarouselItem>
        <CarouselItem className="basis-1/3 text-center uppercase">
          <Link href={"/projetos"} className="tracking-2">Projetos</Link>
        </CarouselItem>
        <CarouselItem className="basis-1/3 text-center uppercase">
          <Link href={"/blog"} className="tracking-2">Blog</Link>
        </CarouselItem>
        <CarouselItem className="basis-1/3 text-center uppercase">
          <Link href={"/experiencia"} className="tracking-2">Experiência</Link>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  )
}
