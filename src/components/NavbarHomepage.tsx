import Link from "next/link"

interface NavbarProps extends React.ComponentProps<"div"> {
  page: string[]
}

export const NavbarHomepage = ({page, ...props}: NavbarProps) => {
  return (
    <div {...props}>
      <div className="relative border-y h-[3.625rem] border-black w-full before:absolute before:-top-[0.25rem] before:block before:w-full before:h-[1px] before:bg-black lg:before:-top-[0.375rem]">
        <ul className="flex justify-between px-6 pb-3 pt-[1.125rem] text-sm uppercase tracking-0.75 md:text-base md:px-10 xl:text-lg xl:px-12">
          <li>
            <Link 
              href={page[0] !== 'home' ? `/${page[0]}` : '/'}
              className="lg:hover:drop-shadow-about lg:hover:text-[1.375rem] lg:hover:-translate-y-5 duration-200"
            >
              {page[0]}
            </Link>
          </li>
          <li>
            <Link
              href={page[1] !== 'home' ? `/${page[1]}` : '/'}className="lg:hover:drop-shadow-contact lg:hover:text-[1.375rem] lg:hover:-translate-y-5 duration-200"
            >
              {page[1]}
            </Link>
          </li>
          <li>
            <Link
              href={page[2] !== 'home' ? `/${page[2]}` : '/'}  className="lg:hover:drop-shadow-projects lg:hover:text-[1.375rem] lg:hover:-translate-y-5 duration-200"
            >
              {page[2]}
            </Link>
          </li>
          <li>
            <Link
              href={page[3] !== 'home' ? `/${page[3]}` : '/'}
              className="lg:hover:drop-shadow-blog lg:hover:text-[1.375rem] lg:hover:-translate-y-5 duration-200"
            >
              {page[3]}
            </Link>
          </li>
          <li className="hidden lg:inline">
            <Link
              href={page[4] !== 'home' ? `/${page[0]}` : '/'}  className="lg:hover:drop-shadow-experience lg:hover:text-[1.375rem] lg:hover:-translate-y-5 duration-200"
            >
              {page[4]}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}