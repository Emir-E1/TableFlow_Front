import { HugeiconsIcon } from "@hugeicons/react";
import {
  Discount01FreeIcons,
  Home01FreeIcons,
  Home01Icon,
  Mail01FreeIcons,
  Notification01FreeIcons,
  SettingDone01FreeIcons,
} from "@hugeicons/core-free-icons";
import Logo from "../ui/Logo";
import NavIcon from "../ui/NavIcon";

const navIcons = [
  { icon: Home01FreeIcons, path: "/" },
  { icon: Discount01FreeIcons, path: "/dashboard" },
  { icon: SettingDone01FreeIcons, path: "/settings" },
  { icon: Mail01FreeIcons, path: "/contact" },
  { icon: Notification01FreeIcons, path: "/notification" },
];

function SideNav() {
  return (
    <aside className="bg-base-dark-2 flex  flex-col gap-8  min-w-28  rounded-l-lg p-5 ">
      <Logo />

      <div className="flex  items-center  flex-col gap-9">
        {navIcons.map((e) => (
          <NavIcon icon={e.icon} path={e.path} key={e.icon} />
        ))}
      </div>
    </aside>
  );
}

export default SideNav;
