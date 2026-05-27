import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "rounded-xl bg-primary text-white shadow shadow-primary/30 hover:bg-primary/90",
        secondary:
          "rounded-xl border-2 border-primary text-primary hover:bg-primary/10",
        editing:
          "w-full border-t border-gray-700/30 bg-primary/30 py-4 transition-colors hover:bg-primary/40",
        outline:
          "rounded-xl border-2 border-base-dark-line bg-base-dark-1 text-white shadow hover:bg-white/5",
        select: "rounded-xl bg-purplish text-white shadow",
        paymentMethod:
          "h-auto min-w-0 flex-col gap-2 rounded-2xl border-2 border-base-dark-line bg-transparent px-3 py-5 text-lg text-white shadow-none hover:border-white/25 hover:bg-white/5 [&_svg]:size-5 [&_svg]:text-slate-300",
      },
      size: {
        default: "min-w-48 p-4",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        full: "w-full p-4",
        icon: "h-12 w-12 rounded-xl p-0 [&_svg]:size-5",
      },
    },
    compoundVariants: [
      {
        variant: "paymentMethod",
        className: "[&_svg]:size-5",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
