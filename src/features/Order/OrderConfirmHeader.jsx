import { Plus, PlusIcon } from "lucide-react";
import IconButton from "../../ui/IconButton";

function OrderConfirmHeader() {
  return (
    <div className="flex  w-full  text-white justify-between border-b border-base-dark-line  pb-6 ">
      <div className="">
        <h1 className="text-4xl font-semibold">Confirmation</h1>
        <p className="mt-2 text-xl text-slate-300">#Order 20535</p>
      </div>
      <IconButton icon={<PlusIcon size={20} />} size="lg" variant="danger" />
    </div>
  );
}

export default OrderConfirmHeader;
