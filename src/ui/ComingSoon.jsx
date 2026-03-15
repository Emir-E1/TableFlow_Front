import { Construction } from "lucide-react";

function ComingSoon() {
  return (
    <div className="w-full min-h-screen flex  justify-center items-center ">
      <div className="flex flex-col items-center bg-base-dark-line w-full">
        <Construction className="text-primary  sm-8  sm:w-16" />
        <span className="text-primary  text-xl font-semibold">
          Coming Soon !
        </span>
      </div>
    </div>
  );
}

export default ComingSoon;
