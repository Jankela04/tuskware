"use client";

import * as React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

const Root = RadixAccordion.Root;

const Item = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>
>(({ className, ...props }, ref) => (
  <RadixAccordion.Item
    ref={ref}
    className={cn("border-b first:border-t", className)}
    {...props}
  />
));
Item.displayName = "AccordionItem";

const Trigger = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>
>(({ className, children, ...props }, ref) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between gap-4 py-4 font-bold underline-offset-2 transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ArrowDown />
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));
Trigger.displayName = RadixAccordion.Trigger.displayName;

const Content = React.forwardRef<
  React.ElementRef<typeof RadixAccordion.Content>,
  React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>
>(({ className, children, ...props }, ref) => (
  <RadixAccordion.Content
    ref={ref}
    className={cn("pb-2", className)}
    {...props}
  >
    {children}
  </RadixAccordion.Content>
));
Content.displayName = RadixAccordion.Content.displayName;

export { Root, Item, Trigger, Content };

function ArrowDown() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform"
    >
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
