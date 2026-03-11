import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

function AppLayout() {
  return (
    <div className="bg-base-dark-1 flex min-h-screen ">
      <SideNav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
