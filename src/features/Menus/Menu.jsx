import MenuActionBar from "./MenuActionBar";
import MenuHeader from "./MenuHeader";
import MenuItem from "./MenuItem";
import MenuTable from "./MenuTable";

function Menu() {
  return (
    <div className="h-full bg-base-dark-1 gap-6  p-1 flex flex-col">
      <MenuHeader />
      <MenuActionBar />
      <div className="flex-1 min-h-0 bg-slate-700">
        <MenuTable />
      </div>
    </div>
  );
}

export default Menu;
