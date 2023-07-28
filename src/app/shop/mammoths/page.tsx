import Button from "@/components/ui/Button";
import Image from "next/image";
import products from "@/data/products.json";
import { Mammoth } from "@/types/products";

const getMammoths = () =>
  products.filter((product) => product.product === "mammoth") as Mammoth[];

function ShopPage() {
  const mammoths = getMammoths();
  return (
    <main className="space-y-4">
      {mammoths.map((mammoth) => (
        <MammothProduct mammoth={mammoth} key={mammoth.id} />
      ))}
    </main>
  );
}

type MammothProductProps = {
  mammoth: Mammoth;
};
function MammothProduct({ mammoth }: MammothProductProps) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-4xl px-4 md:flex md:gap-8">
        <Image
          alt="Classic Mammoth"
          src={mammoth.preview_image}
          width={379}
          height={379}
          className="hidden md:block"
        />
        <div className="flex flex-col items-center gap-4 md:items-start md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary">{mammoth.name}</h2>
            <span className="mt-2 inline-block">{mammoth.tagline}</span>
          </div>
          <Image
            alt="Classic Mammoth"
            src={mammoth.preview_image}
            width={354}
            height={249}
            className="block md:hidden"
          />
          <div className="flex flex-col items-center gap-5 md:items-start">
            <span>{`${mammoth.price}`}</span>
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
  );
}

export default ShopPage;
