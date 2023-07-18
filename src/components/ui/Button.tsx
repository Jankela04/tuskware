"use client";
import Link, { LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex align-center justify-center py-2 px-4 rounded-lg text-lg focus-visible:ring-2 ring-blue-500",
  {
    variants: {
      variant: {
        primary: "bg-primary font-bold hover:bg-primary-600",
        outline: "border border-white bg-background hover:bg-foreground/5",
        link: "text-slate-300 hover:underline underline-offset-2 hover:text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type LinkProps = NextLinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = VariantProps<typeof buttonVariants> &
  (({ comp: "button" } & ButtonProps) | ({ comp: "link" } & LinkProps));

const Button = ({ comp = "button", variant, className, ...props }: Props) => {
  if (comp === "link") {
    return (
      <Link
        {...(props as LinkProps)}
        className={cn(buttonVariants({ variant, className }))}
      />
    );
  }

  return (
    <button
      {...(props as ButtonProps)}
      className={cn(buttonVariants({ variant, className }))}
    />
  );
};

export default Button;
