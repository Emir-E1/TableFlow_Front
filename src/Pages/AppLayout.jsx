import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

function AppLayout() {
  return (
    <div className="bg-base-dark-1 flex h-screen min-h-0 w-full overflow-hidden">
      <SideNav />
      <div className="flex min-h-0 flex-1 overflow-y-auto p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
