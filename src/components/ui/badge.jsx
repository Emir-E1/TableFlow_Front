import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        completed:
          "border-transparent bg-status-completed/20 text-status-completed rounded-full",
        pending:
          "border-transparent bg-status-pending/20 text-status-pending rounded-full",
        preparing:
          "border-transparent bg-status-preparing/20 text-status-preparing rounded-full",
      },
    },
    defaultVariants: {
      variant: "completed",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
