import PaymentMethod from "./PaymentMethod";
import PaymentDetails from "./PaymentDetails";
import PaymentOrderType from "./PaymentOrderType";

function PaymentForm() {
  return (
    <div className="mt-7 flex flex-col gap-7">
      <PaymentMethod />
      <PaymentDetails />
      <PaymentOrderType />
    </div>
  );
}

export default PaymentForm;
