import Image from "next/image";
import { poppins } from "@/lib/fonts";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main>
      <section className="relative h-screen w-full select-text">
        <div className="h-full w-full brightness-[0.25]">
          <Image
            draggable={false}
            className="object-cover object-[66%]"
            fill
            alt="Mammoth Image"
            src="/images/bg-mammoth-image.jpg"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-8 text-center text-white md:px-16">
          <h1 className={`${poppins.className} text-5xl font-bold md:text-7xl`}>
            Journey Back to the Ice Age
          </h1>
          <p className="m-auto mt-6 max-w-2xl text-2xl text-indigo-200 md:text-3xl">
            Bringing Mammoths to Your Doorstep. Shop Mammoths, Mammoth Tools,
            and More.
          </p>
          <Button className="mt-8">Shop Now</Button>
        </div>
      </section>
    </main>
  );
}
