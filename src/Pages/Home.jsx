// Home.jsx — plus besoin de gérer isPaymentsOpen
import { Outlet, useLocation } from "react-router-dom";
import Menu from "./../features/Menus/Menu";

function Home() {
  const location = useLocation();
  const isOrdersOpen = location.pathname.includes("/orders");

  return (
    <div className="relative flex w-full bg-base-dark-1 h-full overflow-hidden">
      <div
        className={`
          min-w-0 transition-all duration-300
          ${isOrdersOpen ? "flex-[2]" : "flex-1"}
        `}
      >
        <Menu />
      </div>

      <aside
        className={`
          min-w-0 h-full transition-all duration-300
          ${isOrdersOpen ? "flex-1" : "w-0 overflow-hidden opacity-0"}
        `}
      >
        <Outlet />
      </aside>
    </div>
  );
}

export default Home;
