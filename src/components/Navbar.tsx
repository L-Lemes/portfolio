import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export const Navbar = () => {
  return (
    <Carousel className="w-full p-4 px-10 bg-black text-white">
      <CarouselPrevious />
      <CarouselContent className="">
        <CarouselItem className="basis-1/3 text-center">
          <Link href={"/"} className="">Início</Link>
        </CarouselItem>
        <CarouselItem className="basis-1/3 text-center">
          <Link href={"/sobre"} className="">Sobre</Link>
        </CarouselItem>
        <CarouselItem className="basis-1/3 text-center">
          <Link href={"/contato"} className="">Contato</Link>
        </CarouselItem>
        <CarouselItem className="basis-1/3 text-center">
          <Link href={"/projetos"} className="">Projetos</Link>
        </CarouselItem>
        <CarouselItem className="basis-1/3 text-center">
          <Link href={"/blog"} className="">Blog</Link>
        </CarouselItem>
        <CarouselItem className="basis-1/3 text-center">
          <Link href={"/experiencia"} className="">Experiência</Link>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  )
}
