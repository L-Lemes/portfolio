import Link from "next/link"

export const ProjectCard = () => {
  return (
    <div className="flex justify-center items-center flex-1 w-full h-full mt-8 bg-featured-image bg-cover bg-center md:mt-12 lg:mt-8 xl:mt-10">
      <div className="bg-amber-50 w-[50%] text-center box-content px-6 pb-8 pt-10">
        <p className="text-2xl">VPN Project</p>
        <Link
          href="/projects"
          className="relative text-sm text-[#666]
          after:absolute after:-bottom-[6px] after:left-1/2 after:-translate-x-1/2 after:block after:w-6 after:h-[0.75px] after:bg-[#666]"
        >
          read more
        </Link>
      </div>
    </div>
  )
}