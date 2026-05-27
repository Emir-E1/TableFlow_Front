import { useNavigate } from "react-router-dom";
import { menuDishes } from "../data/menuDishes";

function Card({
  image = menuDishes[0].image,
  description = menuDishes[0].description,
  price = menuDishes[0].price,
  quantity = menuDishes[0].quantity,
  className,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("orders")}
      className={`relative flex h-full w-full flex-col items-center justify-center rounded-3xl bg-purplish/80 px-6 pb-6 pt-16 ${className}`}
    >
      <img
        src={image}
        alt={description}
        className="absolute -top-12 left-1/2 w-28 -translate-x-1/2 object-contain"
      />

      <div className="flex flex-col gap-3 text-center">
        <h3 className="max-w-60 text-xl font-semibold leading-snug text-white">
          {description}
        </h3>
        <p className="text-2xl font-bold text-white">${price}</p>
        <p className="text-base text-primary">{quantity} Available</p>
      </div>
    </div>
  );
}

export default Card;
