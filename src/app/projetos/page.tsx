import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  return (
    <div className="h-[100dvh] bg-amber-50 pt-8 px-2">
      <Navbar page={['about', 'contact', 'home', 'blog']}/>
      <Suspense fallback={<Loading/>}>
        <Image src="/featuredProject.png" width="1280" height="960" alt="image">
        </Image>
      </Suspense>
    </div>
  )
}