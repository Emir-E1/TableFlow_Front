import { HugeiconsIcon } from "@hugeicons/react";
import { NavLink } from "react-router-dom";

function NavIcon({ icon, path }) {
  return (
    <div
      href={path}
      className="w-14 h-14  flex items-center justify-center rounded-xl leading-none"
    >
      <HugeiconsIcon icon={icon} size={26} className="block text-primary" />
    </div>
  );
}

export default NavIcon;
