import Image from "next/image";
import { poppins } from "@/lib/fonts";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main>
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
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform px-8 text-center text-white md:px-10">
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
      <section className="flex flex-col gap-24 bg-neutral-700 text-white">
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
    </main>
  );
}
