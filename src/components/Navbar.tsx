export const Navbar = () => {
  return (
    <div className="relative border-y-[1px] border-black w-full before:absolute before:-top-[0.25rem] before:block before:w-full before:h-[0.75px] before:bg-black lg:before:-top-[0.375rem]">
      <ul className="flex justify-between px-6 pb-3 pt-[1.125rem] uppercase text-sm md:text-base  xl:text-lg">
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
        <li>
          <a href="/projects">projects</a>
        </li>
        <li>
          <a href="/blog">blog</a>
        </li>
        <li className="hidden xl:inline">
          <a href="/blog">Experience</a>
        </li>
      </ul>
    </div>
  )
}