import Button from "@/components/ui/Button";
import Image from "next/image";

function ShopPage() {
  return (
    <main>
      <section className="bg-secondary py-8">
        <div className="mx-auto max-w-4xl px-4 lg:flex lg:gap-8">
          <Image
            alt="Classic Mammoth"
            src="/images/classic-mammoth.png"
            width={379}
            height={379}
            className="hidden lg:block"
          />
          <div className="flex flex-col items-center gap-4 lg:items-start lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-primary">
                Classic Mammoth
              </h2>
              <span className="mt-2 inline-block">The one you need</span>
            </div>
            <Image
              alt="Classic Mammoth"
              src="/images/classic-mammoth.png"
              width={354}
              height={249}
              className="block lg:hidden"
            />
            <div className="flex flex-col items-center gap-5 lg:items-start">
              <span>$299.99</span>
              <div className="flex gap-5">
                <Button comp="button">Add to cart</Button>
                <Button comp="button" variant="outline">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ShopPage;
