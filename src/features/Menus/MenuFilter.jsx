function MenuFilter({
  categories = [
    "Hot Dishes",
    "Cold Dishes",
    "Soup",
    "Grill",
    "Appetizer",
    "Dessert",
  ],
  activeCategory,
  onSelect,
}) {
  return (
    <div className="flex gap-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
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
  );
}

export default MenuFilter;
