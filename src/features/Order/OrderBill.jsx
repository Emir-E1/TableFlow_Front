import ShadeIconBtn from "../../ui/ShadeIconBtn";

function OrderBill({ onPay }) {
  function handleContinueToPayment() {
    onPay?.();
  }
  return (
    <div className="flex flex-col p-2 gap-11">
      <div className="flex justify-between">
        <div className="text-slate-600 text-xl  text-center ">
          <p>Discount :</p>
          <p>Sub Total :</p>
        </div>

        <div className="text-white text-xl text-center">
          <p> 0 $ </p>
          <p> 140 $ </p>
        </div>
      </div>

      <ShadeIconBtn
        label={"Continue to Payment"}
        type={"primary"}
        onClick={handleContinueToPayment}
      />
    </div>
  );
}

export default OrderBill;
