export const Navbar = () => {
  return (
    <div className="relative border-y-[1px] h-[3.625rem] border-black w-full before:absolute before:-top-[0.25rem] before:block before:w-full before:h-[0.75px] before:bg-black lg:before:-top-[0.375rem]">
      <ul className="flex justify-between px-6 pb-3 pt-[1.125rem] uppercase text-sm md:text-base md:px-10 xl:text-lg xl:px-12">
        <li>
          <a href="/about" className="hover:drop-shadow-about hover:text-[1.375rem] hover:-translate-y-5 duration-200">about</a>
        </li>
        <li>
          <a href="/contact" className="hover:drop-shadow-contact hover:text-[1.375rem] hover:-translate-y-5 duration-200">contact</a>
        </li>
        <li>
          <a href="/projects" className="hover:drop-shadow-projects hover:text-[1.375rem] hover:-translate-y-5 duration-200">projects</a>
        </li>
        <li>
          <a href="/blog" className="hover:drop-shadow-blog hover:text-[1.375rem] hover:-translate-y-5 duration-200">blog</a>
        </li>
        <li className="hidden lg:inline">
          <a href="/blog" className="hover:drop-shadow-experience hover:text-[1.375rem] hover:-translate-y-5 duration-200">Experience</a>
        </li>
      </ul>
    </div>
  )
}