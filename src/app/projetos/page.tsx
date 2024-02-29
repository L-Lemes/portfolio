import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  return (
    <div className="p-[5rem_1rem_0.5rem] md:p-[6rem_1.25rem_0.75rem] lg:p-[4.5rem_5rem_0.5rem] xl:lg:p-[6rem_5rem_0.5rem]">
      <Navbar page={['home', 'about', 'contact', 'blog']}/>
      <Suspense fallback={<Loading/>}>
        <Image src="/featuredProject.png" width="1280" height="960" alt="image">
        </Image>
      </Suspense>
    </div>
  )
}