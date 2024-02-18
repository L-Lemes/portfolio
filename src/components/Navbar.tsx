import Link from "next/link"
interface NavbarProps extends React.ComponentProps<"div"> {

}
export const Navbar = ({...props}: NavbarProps) => {
  return (
    <div {...props}>
      <div className="relative border-y-[1px] h-[3.625rem] border-black w-full before:absolute before:-top-[0.25rem] before:block before:w-full before:h-[0.75px] before:bg-black lg:before:-top-[0.375rem]">
        <ul className="flex justify-between px-6 pb-3 pt-[1.125rem] uppercase text-sm md:text-base md:px-10 xl:text-lg xl:px-12">
          <li>
            <Link href="/about" className="lg:hover:drop-shadow-about lg:hover:text-[1.375rem] lg:hover:-translate-y-5 duration-200">about</Link>
          </li>
          <li>
            <Link href="/contact" className="lg:hover:drop-shadow-contact lg:hover:text-[1.375rem] lg:hover:-translate-y-5 duration-200">contact</Link>
          </li>
          <li>
            <Link href="/projects" className="lg:hover:drop-shadow-projects lg:hover:text-[1.375rem] lg:hover:-translate-y-5 duration-200">projects</Link>
          </li>
          <li>
            <Link href="/blog" className="lg:hover:drop-shadow-blog lg:hover:text-[1.375rem] lg:hover:-translate-y-5 duration-200">blog</Link>
          </li>
          <li className="hidden lg:inline">
            <Link href="/experience" className="lg:hover:drop-shadow-experience lg:hover:text-[1.375rem] lg:hover:-translate-y-5 duration-200">Experience</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}