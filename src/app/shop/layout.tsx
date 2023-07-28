"use client";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import React from "react";

type ShopLayoutProps = {
  children: React.ReactNode;
};

const filters = [
  { filter: "Mammoths", href: "/shop/mammoths" },
  { filter: "Accessories", href: "/shop/accessories" },
];

function ShopLayout({ children }: ShopLayoutProps) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex items-center justify-center gap-4 p-4">
        {filters.map((filter) => (
          <Button
            comp="link"
            href={filter.href}
            variant={pathname.startsWith(filter.href) ? "primary" : "secondary"}
            key={filter.href}
          >
            {filter.filter}
          </Button>
        ))}
      </div>
      {children}
    </>
  );
}

export default ShopLayout;
