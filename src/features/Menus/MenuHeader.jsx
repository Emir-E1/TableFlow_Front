import { useState } from "react";
import MenuFilter from "./MenuFilter";
import MenuSearchBar from "./MenuSearchBar";
import PageTitle from "../../ui/PageTitle";

function MenuHeader() {
  const [activeCategory, setActiveCategory] = useState("Hot Dishes");

  return (
    <div className="flex w-full flex-col gap-6 border-b border-base-dark-line px-6 pt-6">
      <div className="flex justify-between w-full">
        <PageTitle title="Emir's Resto" subtitle="Tuesday, 2 Feb 2026" />
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
