import { getMenuDish } from "../../data/menuDishes";
import { ScrollArea } from "../../components/ui/scroll-area";
import MenuItem from "./MenuItem";

function MenuTable() {
  return (
    <ScrollArea className="h-full">
      <div className=" grid h-full auto-rows-[100px] grid-cols-4 place-items-center gap-x-6 gap-y-20 overflow-y-auto px-4 pb-8 pt-16">
        {Array.from({ length: 10 }, (_, index) => (
          <MenuItem
            key={index}
            dish={getMenuDish(index)}
            className="row-span-2"
          />
        ))}
      </div>
    </ScrollArea>
  );
}

export default MenuTable;
