import { useState } from "react";
import { Heart, Store, Package, Bell, Lock, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    id: "appearance",
    icon: Heart,
    label: "Appearance",
    sub: "Dark and Light mode, Font size",
  },
  {
    id: "restaurant",
    icon: Store,
    label: "Your Restaurant",
    sub: "Manage your restaurant info",
  },
  {
    id: "products",
    icon: Package,
    label: "Products Management",
    sub: "Manage your product, pricing, etc",
  },
  {
    id: "notifications",
    icon: Bell,
    label: "Notifications",
    sub: "Customize your notifications",
  },
  {
    id: "security",
    icon: Lock,
    label: "Security",
    sub: "Configure Password, PIN, etc",
  },
  {
    id: "about",
    icon: Info,
    label: "About Us",
    sub: "Find out more about Posly",
  },
];

function MenuItem({ icon, label, sub, isActive, onClick }) {
  const IconComponent = icon;

  return (
    <div
      onClick={onClick}
      className={`relative flex items-center gap-3 px-4 py-10 mx-2 rounded-xl cursor-pointer transition-colors duration-150
        ${isActive ? "bg-red-900/30" : "hover:bg-white/5"}`}
    >
      <IconComponent
        size={20}
        className={`shrink-0 ${isActive ? "text-primary" : "text-white/50"}`}
      />

      <div className="flex flex-col gap-0.5">
        <span
          className={`text-lg font-medium leading-tight
          ${isActive ? "text-primary" : "text-white/75"}`}
        >
          {label}
        </span>
        <span className="text-xs text-white/35 leading-tight">{sub}</span>
      </div>

      {isActive && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-3/5 bg-primary rounded-l-full" />
      )}
    </div>
  );
}

export default function SettingsNavBar() {
  const [activeId, setActiveId] = useState();
  const navigate = useNavigate();

  function handleItemClick(id) {
    setActiveId(id);

    if (id === "products") {
      navigate("product-management");
      return;
    }

    navigate(".");
  }

  return (
    <nav className="flex h-full max-h-full shrink-0 flex-col overflow-y-auto bg-base-dark-2 rounded-2xl py-3">
      {menuItems.map((item, index) => (
        <div key={item.id}>
          <MenuItem
            icon={item.icon}
            label={item.label}
            sub={item.sub}
            isActive={activeId === item.id}
            onClick={() => handleItemClick(item.id)}
          />
          {index < menuItems.length - 1 && (
            <div className="mx-5 my-1 border-t border-white/[0.06]" />
          )}
        </div>
      ))}
    </nav>
  );
}
