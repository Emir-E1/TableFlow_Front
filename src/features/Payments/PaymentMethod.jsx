import { useState } from "react";
import { Banknote, CreditCard, Wallet } from "lucide-react";
import ShadeIconBtn from "../../ui/ShadeIconBtn";

const methods = [
  { id: "card", label: "Credit Card", Icon: CreditCard },
  { id: "paypal", label: "PayPal", Icon: Wallet },
  { id: "cash", label: "Cash", Icon: Banknote },
];

function PaymentMethod() {
  const [selected, setSelected] = useState("card");

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-semibold">Payment Method</h2>
      <div className="flex gap-3">
        {methods.map((method) => (
          <ShadeIconBtn
            key={method.id}
            className="flex-1"
            variant="paymentMethod"
            label={method.label}
            Icon={<method.Icon />}
            selected={selected === method.id}
            onClick={() => setSelected(method.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default PaymentMethod;
