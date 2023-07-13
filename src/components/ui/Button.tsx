"use client";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex align-center justify-center py-2 px-4 rounded-lg text-lg focus:ring-2 ring-blue-500",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 font-bold hover:bg-primary-600",
        outline:
          "border border-white bg-background hover:bg-gray-800/50 border-input",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        {...props}
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
