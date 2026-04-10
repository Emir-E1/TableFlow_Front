import PayementMethod from "./PayementMethod";
import PayementDetails from "./PayementDetails";
import PayementOrderType from "./PayementOrderType";

function PayementForm() {
  return (
    <div className="mt-7 flex flex-col gap-7">
      <PayementMethod />
      <PayementDetails />
      <PayementOrderType />
    </div>
  );
}

export default PayementForm;
