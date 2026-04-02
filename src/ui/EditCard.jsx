// EditCard.jsx
import { PencilLine } from "lucide-react";
import soup from "../assets/soup.png";

const EditCard = ({
  image = soup,
  title = "Spicy seasoned seafood noodles",
  price = "2.29",
  inventory = "20 Bowls",
  className,
}) => {
  return (
    <div
      className={`flex h-full min-h-0 flex-col rounded-xl border border-base-dark-line bg-base-dark-2 overflow-hidden ${className}`}
    >
      {/* Zone contenu — centrée horizontalement ET verticalement */}
      <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 py-8">
        <img
          src={image}
          alt={title}
          className="h-40 w-40 rounded-full object-cover ring-4 ring-white/10"
        />
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h3 className="text-lg font-semibold leading-snug text-white">
            {title}
          </h3>
          <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>$ {price}</span>
            <span className="h-1 w-1 rounded-full bg-gray-500" />
            <span>{inventory}</span>
          </p>
        </div>
      </div>

      {/* Bouton fixe en bas */}
      <button
        type="button"
        className="flex w-full shrink-0 items-center justify-center gap-2 border-t border-gray-700/30 bg-primary/30 py-4 transition-colors hover:bg-primary/40"
      >
        <PencilLine size={16} color="#ea7c69" />
        <span className="text-sm font-semibold text-primary">Edit dish</span>
      </button>
    </div>
  );
};

export default EditCard;
