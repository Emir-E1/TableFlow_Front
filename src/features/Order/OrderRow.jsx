import { Trash } from "lucide-react";
import Input from "../../ui/Input";
import soup from "../../assets/soup.png";
import ShadeIconBtn from "../../ui/ShadeIconBtn";

function OrderRow() {
  return (
    <div className="flex w-full flex-col gap-4 px-6">
      <div className="flex items-center justify-between gap-4 text-white">
        <div className="flex min-w-0 flex-1 items-center gap-4">
          <img
            src={soup}
            alt=""
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <div className="min-w-0">
            <h3 className=" font-semibold">Spicy Soup Pasta ....</h3>
            <p className="text-text-light">$ 2.45</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-4">
          <Input width={48} height={48} className="text-center p-4" />
          <span className="whitespace-nowrap tabular-nums">$ 4.90</span>
        </div>
      </div>
      <div className="flex min-w-0 items-center gap-3">
        <div className="min-w-0 flex-1">
          <Input placeholder="Please, just a little bit spicy only." />
        </div>
        <ShadeIconBtn
          variant="secondary"
          size="icon"
          Icon={<Trash size={20} />}
          aria-label="Remove item"
        />
      </div>
    </div>
  );
}

export default OrderRow;
