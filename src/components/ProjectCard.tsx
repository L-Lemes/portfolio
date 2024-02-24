import Link from "next/link"

export const ProjectCard = () => {
  return (
    <div className="flex justify-center items-center flex-1 w-full h-full mt-8 bg-featured-image bg-cover bg-center md:mt-12 lg:mt-8 xl:mt-10">
      <div className="text-center bg-amber-50 w-[50%] xl:h-44 box-content px-6 pb-8 pt-10 sm:box-border md:w-[40%] md:pb-10 md:pt-12 lg:w-[30%] lg:pb-8 xl:w-[25%] xl:pb-12">
        <p className="text-2xl mb-0.5 md:text-3xl md:mb-1 xl:text-4xl xl:mb-3">VPN Project</p>
        <Link
          href="/projects"
          className="relative text-nowrap text-sm text-[#666] sm:text-base md:text-lg xl:text-xl
          lg:hover:text-[#aaa] duration-200 lg:hover:text-[1.375rem]
          after:absolute after:-bottom-[0.25rem] after:left-1/2 after:-translate-x-1/2 after:block after:w-6 after:h-[0.75px] after:bg-[#999] md:after:-bottom-2 md:after:w-8 lg:after:hover:bg-[#ccc] lg:after:hover:-bottom-1 lg:after:duration-200"
        >
          read more
        </Link>
      </div>
    </div>
  )
}