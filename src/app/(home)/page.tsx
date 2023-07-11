import Link from "next/link";
import { Balancer } from "react-wrap-balancer";
import Image from "next/image";
import { poppins } from "@/lib/fonts";
import * as Accordion from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="space-y-20">
      <HeroSection />
      <InfoSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[95vh] w-full select-text">
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
          className={cn(
            poppins.className,
            "text-5xl font-bold leading-tight sm:text-7xl"
          )}
        >
          <Balancer>Journey Back to the Ice Age</Balancer>
        </h1>
        <p className="m-auto mt-6 max-w-2xl text-2xl text-indigo-200 md:text-3xl">
          <Balancer>
            Bringing Mammoths to Your Doorstep. Shop Mammoths, Mammoth Tools,
            and More.
          </Balancer>
        </p>
        <CTAButton />
      </div>
    </section>
  );
}

function InfoSection() {
  return (
    <section className="flex flex-col gap-12 md:gap-16">
      <div className="content-container text-center">
        <h2
          className={cn(
            poppins.className,
            "pb-10 text-4xl font-bold text-primary-500 lg:text-5xl"
          )}
        >
          <Balancer>Mammoths for your everyday life</Balancer>
        </h2>
        <p className="mx-auto">
          <Balancer>
            Discover the awe-inspiring world of mammoths and bring their
            enchantment into your life. Our mammoth collection offers
            extraordinary companionship and endless possibilities. From
            delightful playtime to unforgettable adventures, our mammoths are
            here to ignite your imagination and create lifelong memories.
            Explore our selection today and experience the magic of owning a
            mammoth firsthand.
          </Balancer>
        </p>
      </div>
      <div className="content-container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:gap-8">
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
              "pb-10 text-3xl font-bold text-primary-500 xl:text-4xl"
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
  );
}

function TestimonialsSection() {
  return (
    <section>
      <h2
        className={cn(
          poppins.className,
          "mb-10 px-8 text-center text-4xl font-bold text-primary-500 sm:text-5xl"
        )}
      >
        <Balancer>Just See What Our Customers Say</Balancer>
      </h2>
      <div className="content-container flex flex-col gap-6 lg:flex-row">
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
            They&apos;re surprisingly adorable, and playing with them is an
            absolute delight. It&apos;s like having a giant, cuddly friend
            always by my side. I can&apos;t imagine my life without my mammoth
            companion now!
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
            memories. It&apos;s amazing how such a unique pet can bring so much
            joy into my life.
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Can I choose the age of the mammoth I adopt?",
      answer:
        "No, although the preview pictures may depict fully grown mammoths, please note that when you purchase our mammoths, you will receive a very young one, typically no older than one month.\n \n We intentionally provide young mammoths for sale as we believe that bonding and fostering a strong connection with their owners is most effectively achieved during their early stages of life. This gives you the unique opportunity to raise, nurture, and witness the growth of your mammoth from its earliest moments.",
    },
    {
      question: "Can I purchase a mammoth if I am located outside of Europe?",
      answer:
        "Currently, we only offer mammoths for customers within Europe. We do not provide international shipping services.",
    },
    {
      question: "Can mammoths be kept as indoor pets?",
      answer:
        "Yes, during their first year, mammoths can be kept indoors. They grow rapidly during this stage, so it is recommended to gradually transition them to outdoor living before their first year. Providing a safe and comfortable environment both indoors and outdoors is essential for their well-being.",
    },
    {
      question: "Can I ride my mammoth?",
      answer:
        "Yes, once your mammoth reaches around 4 years of age, they will be suitable for riding. As they grow older and stronger, riding becomes a possibility. Remember to train your mammoth appropriately and use proper riding gear to ensure both your safety and the well-being of your mammoth.",
    },
    {
      question: "Can I train my mammoth to perform specific tasks?",
      answer:
        "Absolutely! You have the flexibility to train your mammoth according to your preferences. Whether you want them to sit, stand, carry objects, travel with you, be more friendly towards strangers, or even act as a house guard, mammoths are intelligent creatures that can be trained to adapt to various commands and behaviors.",
    },
  ];

  return (
    <section className="content-container">
      <h2
        className={cn(
          poppins.className,
          "mb-10 text-center text-4xl font-bold text-primary-500 md:text-5xl"
        )}
      >
        Frequently Asked Questions
      </h2>
      <Accordion.Root
        type="multiple"
        className="mx-auto max-w-3xl border-red-500 text-lg"
      >
        {faqs.map((faq, idx) => {
          return (
            <Accordion.Item value={`faq-${idx + 1}`} key={idx}>
              <Accordion.Trigger>{faq.question}</Accordion.Trigger>
              <Accordion.Content className="text-slate-300">
                <p className="whitespace-pre-line">{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </section>
  );
}

function CTASection() {
  return (
    <section className="content-container pb-20">
      <h2
        className={cn(
          poppins.className,
          "mb-20 text-center text-4xl font-bold text-primary-500 sm:text-5xl"
        )}
      >
        Are you ready?
      </h2>
      <div className="flex justify-center">
        <CTAButton />
      </div>
    </section>
  );
}

function CTAButton() {
  return (
    <Link
      href="/shop"
      className={cn(
        "mt-8",
        "align-center inline-flex justify-center rounded-lg px-4 py-2 text-lg",
        "bg-primary-500 font-bold hover:bg-primary-600"
      )}
    >
      Shop Now
    </Link>
  );
}
