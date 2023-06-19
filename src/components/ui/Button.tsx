import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex align-center justify-center py-2 px-4 rounded-lg text-lg",
  {
    variants: {
      type: {
        primary: "bg-primary-500 font-bold hover:bg-primary-600",
      },
    },
    defaultVariants: {
      type: "primary",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <button
        {...props}
        className={cn(buttonVariants({ type, className }))}
        ref={ref}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
