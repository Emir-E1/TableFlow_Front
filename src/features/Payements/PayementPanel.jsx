// PayementPanel.jsx — reçoit onClose pour fermer le portal
import Button from "./../../ui/Button";
import PaymenentHeader from "./../Payements/PaymenentHader";
import PayementForm from "./PayementForm";

function PayementPanel({ onClose }) {
  return (
    <div className="flex  flex-col p-6 gap-6">
      <PaymenentHeader />
      <PayementForm />
      <div className="items-end">
        <div className="flex   gap-3">
          <Button className={"w-full"} onClick={onClose} type="secondary">
            Cancel
          </Button>
          <Button className={"w-full"} type="primary">
            Confirm Payement
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PayementPanel;
