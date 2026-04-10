import { Banknote, CreditCard, Wallet } from "lucide-react";

const methods = [
  { id: "card", label: "Credit Card", Icon: CreditCard, active: true },
  { id: "paypal", label: "Paypal", Icon: Wallet, active: false },
  { id: "cash", label: "Cash", Icon: Banknote, active: false },
];

function PayementMethod() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-semibold">Payment Method</h2>
      <div className="grid grid-cols-3 gap-3">
        {methods.map(({ id, label, Icon, active }) => (
          <button
            key={id}
            type="button"
            className={`rounded-2xl border px-3 py-4 text-center transition ${
              active
                ? "border-primary bg-base-form"
                : "border-base-dark-line bg-transparent"
            }`}
          >
            <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center">
              <Icon className="h-5 w-5 text-slate-300" />
            </div>
            <p className="text-lg">{label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PayementMethod;
