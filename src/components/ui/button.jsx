import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary  rounded-xl text-white-foreground shadow hover:bg-primary/90",
        editing:
          " w-full border-t   border-gray-700/30 bg-primary/30 py-4 transition-colors hover:bg-primary/40",
        secondary:
          "text-primary rounded-xl border-2 border-primary hover:bg-primary/40",
        outline: " bg-base-dark-1 rounded-xl text-white-foreground shadow p-4 ",
      },
      size: {
        default: " p-4  min-w-48",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-12 w-12 p-4 rounded-xl hover:bg-primary/50 hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
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
