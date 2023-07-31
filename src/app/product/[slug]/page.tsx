import Button from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { convertToSlug } from "@/lib/utils";
import products from "@/data/products.json";
import { notFound } from "next/navigation";
import React from "react";
import ImageCarousel from "@/components/ImageCarousel";

type ProductPageProps = {
  params: {
    slug: string;
  };
};
function getProductFromSlug(slug: string) {
  return products.find((product) => convertToSlug(product.name) === slug);
}

function ProductPage({ params: { slug } }: ProductPageProps) {
  const product = getProductFromSlug(slug);

  if (!product) notFound();

  const images = React.useMemo(() => {
    return product.images.map((img) => {
      return {
        name: product.name,
        url: img,
      };
    });
  }, [product]);

  return (
    <main className="content-container py-6 md:py-24">
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <ImageCarousel
          options={{ loop: true }}
          images={images}
          className="w-full md:w-1/2"
        />
        <Separator className="md:hidden" />
        <div className="mt-6 w-full md:mt-0 md:w-1/2 md:py-6 md:pl-10">
          <h1 className="mb-6 text-3xl font-bold text-primary">
            {product.name}
          </h1>
          <p className="leading-relaxed">{product.description}</p>
          <Separator className="my-6" />
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium text-primary">{`$${product.price}`}</span>
            <Button comp="button">Add to Cart</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
