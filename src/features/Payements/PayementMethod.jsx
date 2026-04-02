import { CreditCard } from "lucide-react";
function PayementMethod() {
  return (
    <div className="flex flex-col text-white  gap-5 ">
      <h1 className="text-2xl font-semibold">Payment Method</h1>
      <div className="flex  gap-2">
        <div
          onClick={console.log("clicked")}
          className="flex text-white flex-col justify-center items-center p-4 gap-2 rounded-2xl border-2 border-white"
        >
          <CreditCard color="white" />
          <p>Credit Card</p>
        </div>
      </div>
    </div>
  );
}

export default PayementMethod;
