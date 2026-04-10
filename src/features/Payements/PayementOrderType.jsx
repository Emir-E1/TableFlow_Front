import Input from "../../ui/Input";
import { ChevronDown } from "lucide-react";

function PayementOrderType() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-2">
        <label className="text-xl">Order Type</label>
        <Input placeholder="Dine In" Icon={ChevronDown} className="text-xl" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xl">Table no.</label>
        <Input placeholder="140" className="text-xl" />
      </div>
    </div>
  );
}

export default PayementOrderType;
