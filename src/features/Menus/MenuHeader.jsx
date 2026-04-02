import { useState } from "react";
import MenuFilter from "./MenuFilter";
import MenuSearchBar from "./MenuSearchBar";

function MenuHeader() {
  const [activeCategory, setActiveCategory] = useState("Hot Dishes");

  return (
    <div className="flex flex-col w-full border-b-2 gap-6 border-base-dark-line px-6 pt-6">
      <div className="flex justify-between w-full">
        <div className="text-white">
          <h1 className="text-xl font-bold">Emir's Resto</h1>
          <h3>Tuesday, 2 Feb 2026</h3>
        </div>
        <MenuSearchBar />
      </div>

      <MenuFilter
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
    </div>
  );
}

export default MenuHeader;
