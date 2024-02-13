import Link from "next/link"

export const ProjectCard = () => {
  return (
    <div className="flex justify-center items-center flex-1 w-full h-full mt-8 bg-featured-image bg-cover bg-center md:mt-12 lg:mt-8 xl:mt-10">
      <div className="bg-amber-50 w-[50%] text-center box-content px-6 pb-8 pt-10 sm:box-border md:w-[40%] md:pb-10 md:pt-12">
        <p className="text-2xl md:text-3xl md:mb-1">VPN Project</p>
        <Link
          href="/projects"
          className="relative text-sm text-[#666] md:text-base
          after:absolute after:-bottom-[0.375rem] after:left-1/2 after:-translate-x-1/2 after:block after:w-6 after:h-[0.75px] after:bg-[#666] md:-bottom-2 md:w-8"
        >
          read more
        </Link>
      </div>
    </div>
  )
}