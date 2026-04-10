import Button from "../../ui/Button";
import PaymenentHeader from "./PaymenentHeader";
import PayementForm from "./PayementForm";

function PayementPanel({ onClose }) {
  return (
    <div className="flex h-full min-h-full flex-col p-8 text-white">
      <PaymenentHeader />
      <PayementForm />
      <div className="mt-auto grid grid-cols-2 gap-3 pt-10">
        <Button className="w-full" onClick={onClose} type="secondary">
            Cancel
        </Button>
        <Button className="w-full" type="primary">
          Confirm Payment
        </Button>
      </div>
    </div>
  );
}

export default PayementPanel;
