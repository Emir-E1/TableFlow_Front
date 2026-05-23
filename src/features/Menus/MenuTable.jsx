import MenuItem from "./MenuItem";

function MenuTable() {
  return (
    <div className="h-full overflow-y-auto pt-16 pb-8 px-4 grid grid-cols-4 auto-rows-[100px] gap-x-6 gap-y-20 place-items-center custom-scrollbar">
      {Array.from({ length: 10 }).map((_, index) => (
        <MenuItem className="row-span-2" />
      ))}
    </div>
  );
}

export default MenuTable;
