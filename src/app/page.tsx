import { gwendolyn } from "./fonts";
import { Navbar } from "../components/Navbar";
import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="relative flex flex-col h-[100dvh] w-full p-[5rem_1rem_0.5rem] md:p-[6rem_1.25rem_0.75rem] lg:p-[4.5rem_5rem_0.5rem] xl:lg:p-[7rem_5rem_0.5rem]">
      <h1 className="font-bold text-4xl font-serif text-center md:text-5xl  xl:text-6xl">
        Lucas L. Borges
      </h1>
      <div className="flex flex-col items-center justify-center w-fit mx-auto uppercase tracking-2 mt-16 mb-24 text-center sm:flex-row sm:gap-3 md:gap-4 md:mt-4 md:mb-28 lg:gap-5 lg:mb-20 xl:gap-6 xl:mb-32">
        <h2 className={`${gwendolyn.className} text-5xl font-bold mb-1 sm:order-1 md:text-6xl xl:text-7xl`}>
          ls
        </h2>
        <p className="font-light sm:order-0 md:text-lg tracking-2">O bom humor é a unica</p>
        <p className="font-light sm:order-2 md:text-lg tracking-2">qualidade divina do homem</p>
      </div>
      <Navbar page={['sobre', 'contato', 'projetos', 'blog', 'experiencia']}/>
      <ProjectCard/>
    </div>

  );
}