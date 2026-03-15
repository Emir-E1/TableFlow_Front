import { Outlet, useMatch } from "react-router-dom";
import Menu from "../features/Menus/Menu";

function Home() {
  const isOrdersOpen = Boolean(useMatch("/app/home/orders"));

  return (
    <div className="flex w-full h-full gap-6">
      <div
        className={`min-w-0 transition-all duration-300 ${
          isOrdersOpen ? "flex-[2]" : "flex-1"
        }`}
      >
        <Menu />
      </div>

      <aside
        className={`min-w-0 h-full transition-all duration-300 ${
          isOrdersOpen ? "flex-1" : "hidden"
        }`}
      >
        <Outlet />
      </aside>
    </div>
  );
}

export default Home;
