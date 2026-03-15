import soup from "../assets/soup.png";

function Card({
  image,
  description = "Spicy seasoned seafood noodles",
  price = 19,
  quantity = 20,
}) {
  return (
    <div className="relative bg-[#251D2B]/80 rounded-2xl flex flex-col items-center pt-16 px-6 pb-6 max-w-48">
      {/* image */}
      <img
        src={image || soup}
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-28"
      />

      {/* content */}
      <div className="text-center">
        <h3 className="text-white  font-light md:font-medium ">
          {description}
        </h3>

        <p className="text-white mt-2">${price}</p>
        <p className="text-orange-400 mt-2 hidden md:block">
          {quantity} Available
        </p>
      </div>
    </div>
  );
}

export default Card;
