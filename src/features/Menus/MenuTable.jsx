import MenuItem from "./MenuItem";

function MenuTable() {
  return (
    // 1. h-full + overflow-y-auto active le scroll vertical
    // 2. pt-16 empêche l'image de la première rangée d'être coupée en haut
    // 3. gap-y-20 donne l'espace vertical nécessaire pour l'image qui dépasse
    // 4. justify-items-center centre tes cartes dans chaque colonne
    <div className="h-full overflow-y-auto pt-16 pb-8 px-4 grid grid-cols-4 auto-rows-[100px] gap-x-6 gap-y-20 place-items-center custom-scrollbar">
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
      <MenuItem className="row-span-2" />
    </div>
  );
}

export default MenuTable;
