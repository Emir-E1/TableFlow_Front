import PaymentHeader from "./PaymentHeader";
import PaymentForm from "./PaymentForm";
import ShadeIconBtn from "../../ui/ShadeIconBtn";

function PaymentPanel({ onClose }) {
  return (
    <div className="flex h-full min-h-full flex-col p-8 text-white">
      <PaymentHeader />
      <PaymentForm />
      <div className="mt-auto grid grid-cols-2 gap-3 pt-10">
        <ShadeIconBtn label="Cancel" onClick={onClose} type="secondary" />
        <ShadeIconBtn label="Confirm Payment" type="primary" />
      </div>
    </div>
  );
}

export default PaymentPanel;
