import { NavLink } from "react-router-dom";

function NavIcon({ Icon, path }) {
  const IconRender = Icon;
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `w-14 h-14 flex items-center justify-center text-primary rounded-xl leading-none ${isActive ? "bg-primary text-white" : ""}`
      }
    >
      <IconRender size={24} className="" />
    </NavLink>
  );
}

export default NavIcon;
