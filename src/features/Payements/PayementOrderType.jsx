import Input from "../../ui/Input";

function PayementOrderType() {
  return (
    <div className="py-4 flex justify-between px-6 text-white">
      <div className="flex flex-col gap-2">
        <label>Order Type</label>
        <Input />
      </div>
      <div className="flex flex-col gap-2">
        <label>Table no.</label>
        <Input />
      </div>
    </div>
  );
}

export default PayementOrderType;
