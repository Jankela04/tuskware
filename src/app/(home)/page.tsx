import Image from "next/image";
import { poppins } from "@/lib/fonts";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="bg-neutral-700 text-white">
      <section className="relative h-screen w-full select-text">
        <div className="h-full w-full brightness-[0.25]">
          <Image
            priority
            draggable={false}
            className="object-cover object-[66%]"
            fill
            alt="Snow Mammoth in Mountains"
            src="/images/bg-mammoth-image.jpg"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-8 text-center md:px-10">
          <h1
            className={cn(poppins.className, "text-5xl font-bold xl:text-7xl")}
          >
            Journey Back to the Ice Age
          </h1>
          <p className="m-auto mt-6 max-w-2xl text-2xl text-indigo-200 xl:text-3xl">
            Bringing Mammoths to Your Doorstep. Shop Mammoths, Mammoth Tools,
            and More.
          </p>
          <Button className="mt-8">Shop Now</Button>
        </div>
      </section>
      <section className="flex flex-col gap-24">
        <div className="content-container pt-20 text-center">
          <h2
            className={cn(
              poppins.className,
              "pb-10 text-4xl font-bold text-primary-500 lg:text-5xl"
            )}
          >
            Mammoths for your everyday life
          </h2>
          <p className="mx-auto max-w-3xl">
            Discover the awe-inspiring world of mammoths and bring their
            enchantment into your life. Our mammoth collection offers
            extraordinary companionship and endless possibilities. From
            delightful playtime to unforgettable adventures, our mammoths are
            here to ignite your imagination and create lifelong memories.
            Explore our selection today and experience the magic of owning a
            mammoth firsthand.
          </p>
        </div>
        <div className="content-container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:gap-10">
          <div>
            <Image
              src="/images/mammoth-transparent.png"
              alt="Mammoth"
              width={540}
              height={510}
            />
          </div>
          <div>
            <h2
              className={cn(
                poppins.className,
                "py-10 text-3xl font-bold text-primary-500 xl:text-4xl"
              )}
            >
              Discover Mammoth Connections
            </h2>
            <p className="mx-auto max-w-lg py-4">
              Adopt mammoths and embark on unforgettable journeys as you play,
              pet, and bond with these pets. Discover the joy of real-time
              coexistence and forge lasting connections that enrich your life.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-10">
        <h2
          className={cn(
            poppins.className,
            "mb-10 px-8 text-center text-4xl font-bold text-primary-500 sm:text-5xl"
          )}
        >
          Hear What Our Customers Say
        </h2>
        <div className="content-container flex flex-col gap-6 pb-20 lg:flex-row">
          <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-slate-300 bg-neutral-800 p-10 shadow-xl shadow-neutral-900 lg:w-1/3">
            <Image
              src="/images/jessica-barnes.jpg"
              alt="Jessica Barnes"
              width={75}
              height={75}
              className="rounded-full"
            />
            <span className="text-2xl">Jessica Barnes</span>
            <blockquote className="text-center text-lg text-slate-300">
              Bringing a mammoth into my life was the best decision ever!
              They're surprisingly adorable, and playing with them is an
              absolute delight. It's like having a giant, cuddly friend always
              by my side. I can't imagine my life without my mammoth companion
              now!
            </blockquote>
          </div>
          <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-slate-300 bg-neutral-800 p-10 shadow-xl shadow-neutral-900 lg:w-1/3">
            <Image
              src="/images/ryan-mitchell.jpg"
              alt="Ryan Mitchell"
              width={75}
              height={75}
              className="rounded-full"
            />
            <span className="text-2xl">Alex Carter</span>
            <blockquote className="text-center text-lg text-slate-300">
              From the first moment I interacted with them, I knew they would
              become an integral part of my everyday life. Playing with these
              lovable creatures has brought an unparalleled sense of happiness.
            </blockquote>
          </div>
          <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-slate-300 bg-neutral-800 p-10 shadow-xl shadow-neutral-900 lg:w-1/3">
            <Image
              src="/images/sophie-anderson.jpg"
              alt="Sophie Anderson"
              width={70}
              height={70}
              className="rounded-full"
            />
            <span className="text-2xl">Sophie Anderson</span>
            <blockquote className="text-center text-lg text-slate-300">
              I never though i needed mammoths. Their adorable nature and
              playfulness are simply irresistible. Playing with my mammoth
              companion brings me immense happiness and creates unforgettable
              memories. It's amazing how such a unique pet can bring so much joy
              into my life.
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
