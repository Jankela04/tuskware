"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import {
  Cross1Icon as CrossIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setIsMobileMenuOpen(false)
    );

    return () => {
      window.removeEventListener(
        "resize",
        () => window.innerWidth >= 768 && setIsMobileMenuOpen(false)
      );
    };
  }, []);
  return (
    <nav className="w-full bg-black text-white">
      <div className="content-container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          TuskWare
        </Link>
        <button className="block md:hidden" onClick={toggleMenu}>
          {!isMobileMenuOpen ? (
            <>
              <HamburgerMenuIcon className="h-8 w-8" />
              <span className="sr-only">Open navigation menu</span>
            </>
          ) : (
            <>
              <CrossIcon className="h-8 w-8" />
              <span className="sr-only">Close navigation menu</span>
            </>
          )}
        </button>
        <div
          className={`left-0 bg-black md:flex md:items-center md:gap-4 ${
            isMobileMenuOpen
              ? "absolute top-16 z-50 flex w-full flex-col items-end justify-between gap-5 p-5"
              : "hidden"
          }`}
        >
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
const NavLinks = () => {
  return (
    <>
      <Button comp="link" variant="link" href="/auth/login">
        Login
      </Button>
      <Button comp="link" variant="primary" href="/shop">
        Shop Now
      </Button>
    </>
  );
};

export default Navbar;
