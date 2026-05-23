import Button from "../../ui/Button";
import PaymenentHeader from "./PaymenentHeader";
import PayementForm from "./PayementForm";
import ShadeIconBtn from "../../ui/ShadeIconBtn";

function PayementPanel({ onClose }) {
  return (
    <div className="flex h-full min-h-full flex-col p-8 text-white">
      <PaymenentHeader />
      <PayementForm />
      <div className="mt-auto grid grid-cols-2 gap-3 pt-10">
        <ShadeIconBtn label="Cancel" onClick={onClose} type="secondary" />
        <ShadeIconBtn label="Confirm Payment" type="primary" />
      </div>
    </div>
  );
}

export default PayementPanel;
