"use client";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import React from "react";

type ShopLayoutProps = {
  children: React.ReactNode;
};

function ShopLayout({ children }: ShopLayoutProps) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex items-center justify-center gap-4 p-4">
        <Button
          comp="link"
          href="/shop/mammoths"
          variant={
            pathname.startsWith("/shop/mammoths") ||
            pathname.startsWith("/shop")
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
      </div>
      {children}
    </>
  );
}

export default ShopLayout;
