import { Search } from "lucide-react";
import Input from "../../ui/Input";

function MenuSearchBar() {
  return (
    <div>
      <Input placeholder={"Search for food, coffee, etc."} Icon={Search} />
    </div>
  );
}

export default MenuSearchBar;
