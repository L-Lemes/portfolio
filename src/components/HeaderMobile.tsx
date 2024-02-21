import { gwendolyn } from "@/app/fonts"

export const HeaderMobile = ({...props}: React.ComponentProps<"div">) => {
  return (
    <div {...props}>
      <div className={`${gwendolyn.className} text-center font-bold border-b border-black pt-4 pb-3`} >
        <p className="text-4xl">LS</p>
      </div>
    </div>
  )
}