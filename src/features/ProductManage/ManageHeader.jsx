import { useState } from "react";
import { Settings2 } from "lucide-react";
import ShadeIconBtn from "../../ui/ShadeIconBtn";

const categories = [
  "Hot Dishes",
  "Cold Dishes",
  "Soup",
  "Grill",
  "Appetizer",
  "Dessert",
];

function ManageHeader() {
  const [activeCategory, setActiveCategory] = useState("Hot Dishes");

  return (
    <header className="flex flex-col bg-base-dark-2 px-6 pt-6">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-semibold text-white">
          Products Management
        </h1>
        <button className="flex items-center gap-3 px-5 py-4 rounded-xl border border-base-dark-line text-white hover:bg-white/5 transition-colors">
          <Settings2 />
          <span className="text-sm font-medium">Manage Categories</span>
        </button>
      </div>

      <div className="flex gap-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors duration-150 whitespace-nowrap
              ${
                activeCategory === cat
                  ? "border-primary text-primary"
                  : "border-transparent text-white/45 hover:text-white/70"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </header>
  );
}

export default ManageHeader;
