"use client";

import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";

function ProductFilter() {
  const pathname = usePathname();
  return (
    <>
      <Button
        comp="link"
        href="/shop/mammoths"
        variant={
          pathname.startsWith("/shop/mammoths") || pathname.startsWith("/shop")
            ? "primary"
            : "secondary"
        }
      >
        Mammoths
      </Button>
      <Button
        comp="link"
        href="/shop/accessories"
        variant={
          pathname.startsWith("/shop/accessories") ? "primary" : "secondary"
        }
      >
        Accessories
      </Button>
    </>
  );
}

export default ProductFilter;
