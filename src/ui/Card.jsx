import { useNavigate } from "react-router-dom";
import soup from "../assets/soup.png";

function Card({
  image,
  description = "Spicy seasoned seafood noodles",
  price = 19,
  quantity = 20,
  className,
}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("orders")}
      className={`relative bg-[#251D2B]/80 rounded-3xl flex flex-col items-center justify-center pt-16 px-6 pb-6 w-full h-full ${className}`}
    >
      <img
        src={image || soup}
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-28"
      />

      <div className="text-center flex flex-col gap-3">
        <h3 className="text-white font-semibold text-xl max-w-60 leading-snug">
          {description}
        </h3>
        <p className="text-white text-2xl font-bold">${price}</p>
        <p className="text-primary text-base hidden md:block">
          {quantity} Available
        </p>
      </div>
    </div>
  );
}

export default Card;
