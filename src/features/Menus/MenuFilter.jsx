function MenuFilter({
  category = [
    "Hot Dishes",
    "Cold Dishes",
    "Soup",
    "Grill",
    "Appetizer",
    "Dessert",
  ],
}) {
  return (
    <div className="flex w-10/12 justify-between items-center text-white">
      {category.map((e) => (
        <span>{e}</span>
      ))}
    </div>
  );
}

export default MenuFilter;
