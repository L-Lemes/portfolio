export const Navbar = () => {
  return (
    <div className="relative border-y-[1px] border-black w-full before:absolute before:-top-[0.25rem] before:block  before:w-full before:h-[1px] before:bg-black">
      <ul className="flex justify-between px-6 pb-3 pt-[1.125rem] uppercase text-sm">
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
      </ul>
    </div>
  )
}