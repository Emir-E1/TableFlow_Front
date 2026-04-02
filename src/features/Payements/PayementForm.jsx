import PayementMethod from "./PayementMethod";
import Input from "./../../ui/Input";
import PayementDetails from "./PayementDetails";
import PayementOrderType from "./PayementOrderType";
function PayementForm() {
  //method map over it
  return (
    <div className="flex flex-col gap-4">
      <PayementMethod />
      <PayementDetails />
      <PayementOrderType />
    </div>
  );
}

export default PayementForm;
