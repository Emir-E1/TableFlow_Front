import { ChevronDown } from "lucide-react";
import SelectInput from "../../ui/SelectInput";

function MenuActionBar() {
  return (
    <div className="flex justify-between px-4">
      <h1 className=" font-bold text-white text-2xl ">Choose Dishes</h1>
      <SelectInput
        options={["Dine In", "To Go", "Delivery"]}
        icon={<ChevronDown size={20} className="text-white" />}
      />
    </div>
  );
}

export default MenuActionBar;
