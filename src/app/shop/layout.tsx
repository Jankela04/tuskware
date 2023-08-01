import ProductFilter from "./ProductFilter";

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
