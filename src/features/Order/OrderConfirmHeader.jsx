import { PlusIcon } from "lucide-react";
import ShadeIconBtn from "../../ui/ShadeIconBtn";

function OrderConfirmHeader() {
  return (
    <div className="flex w-full justify-between border-b border-base-dark-line pb-6 text-white">
      <div>
        <h1 className="text-4xl font-semibold">Confirmation</h1>
        <p className="mt-2 text-xl text-slate-300">#Order 20535</p>
      </div>
      <ShadeIconBtn
        variant="outline"
        size="icon"
        Icon={<PlusIcon size={20} />}
        aria-label="Add item"
        className="border-primary text-primary hover:bg-primary hover:text-white"
      />
    </div>
  );
}

export default OrderConfirmHeader;
