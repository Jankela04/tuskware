import { Metadata } from "next";
import ProductFilter from "./ProductFilter";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop Mammoths and Mammoth accessories",
};

type ShopLayoutProps = {
  children: React.ReactNode;
};

function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <>
      <div className="flex items-center justify-center gap-4 p-4">
        <ProductFilter />
      </div>
      {children}
    </>
  );
}

export default ShopLayout;
