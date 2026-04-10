import { ChevronDown } from "lucide-react";
import plateImg from "../../assets/soup.png";
import SelectInput from "../../ui/SelectInput";
const ITEMS = [
  { name: "Spicy seasoned seafood noodles", ordered: 200 },
  { name: "Salted pasta with mushroom sauce", ordered: 120 },
  { name: "Beef dumpling in hot and sour soup", ordered: 80 },
];

function MostOrdered() {
  return (
    <div className=" w-full rounded-xl bg-base-dark-2 p-6">
      <div className="flex items-center justify-between gap-4 border-b border-base-dark-line pb-4">
        <h2 className="text-lg font-semibold text-white">Most Ordered</h2>
        <SelectInput
          options={["Today", "Last Week", "Last Month"]}
          icon={<ChevronDown size={20} className="text-white" />}
          onChange={(val) => console.log(val)}
        />
      </div>

      <ul className="flex flex-col divide-y divide-base-dark-line">
        {ITEMS.map(({ name, ordered }) => (
          <li key={name} className="flex items-center gap-4 py-4 first:pt-4">
            <img
              src={plateImg}
              alt=""
              className="h-14 w-14 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-white">{name}</p>
              <p className="mt-0.5 text-sm text-text-light">
                {ordered} dishes ordered
              </p>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-2 w-full rounded-lg border border-primary py-3 text-sm font-medium text-primary transition hover:bg-primary/10"
      >
        View All
      </button>
    </div>
  );
}

export default MostOrdered;
