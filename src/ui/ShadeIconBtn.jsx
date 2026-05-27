import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STYLE_VARIANTS = new Set([
  "primary",
  "secondary",
  "editing",
  "outline",
  "select",
  "paymentMethod",
]);

const ShadeIconBtn = forwardRef(function ShadeIconBtn(
  {
    label,
    children,
    onClick,
    Icon,
    type,
    variant,
    size,
    selected = false,
    className,
    ...props
  },
  ref
) {
  let resolvedVariant = variant ?? "primary";
  let htmlType = "button";

  if (type != null) {
    if (STYLE_VARIANTS.has(type)) {
      resolvedVariant = type;
    } else {
      htmlType = type;
    }
  }

  const isPaymentMethod = resolvedVariant === "paymentMethod";

  return (
    <Button
      ref={ref}
      type={htmlType}
      variant={resolvedVariant}
      size={size}
      className={cn(
        !isPaymentMethod && (label || children) && "gap-2",
        isPaymentMethod &&
          selected &&
          "border-primary bg-base-form hover:border-primary hover:bg-base-form",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {Icon}
      {children ?? (label != null ? <span>{label}</span> : null)}
    </Button>
  );
});

ShadeIconBtn.displayName = "ShadeIconBtn";

export default ShadeIconBtn;
