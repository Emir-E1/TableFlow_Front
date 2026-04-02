import {
  Home,
  Percent,
  BarChart3,
  Mail,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import Logo from "../ui/Logo";
import NavIcon from "../ui/NavIcon";
import { useLocation } from "react-router-dom";

const navIcons = [
  { Icon: Home, path: "home" },
  { Icon: Percent, path: "discount" },
  { Icon: BarChart3, path: "dashboard" },
  { Icon: Mail, path: "contact" },
  { Icon: Bell, path: "notification" },
  { Icon: Settings, path: "settings" },
];

function SideNav() {
  const location = useLocation();

  return (
    <aside className="bg-base-dark-2 overflow-hidden flex items-center flex-col gap-8 min-w-28 rounded-l-lg p-8">
      <Logo />
      <div className="flex flex-col h-full">
        <div className="flex items-center flex-col gap-9">
          {navIcons.map((e) => {
            const isActive = location.pathname.includes(e.path);
            return (
              <div
                key={e.path}
                className={`p-2 ${isActive ? "bg-base-dark-1 rounded-xl" : ""}`}
              >
                <NavIcon Icon={e.Icon} path={e.path} />
              </div>
            );
          })}
        </div>

        <div className="mt-auto">
          <NavIcon Icon={LogOut} path={"/"} />
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
