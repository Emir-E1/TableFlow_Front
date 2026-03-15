import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

function AppLayout() {
  return (
    <div className="bg-base-dark-1 flex h-screen scroll-none">
      <SideNav />
      <div className="flex-1 p-2 h-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
