import { Construction } from "lucide-react";

function ComingSoon() {
  return (
    <div className="w-full min-h-screen flex  justify-center items-center ">
      <div className="flex flex-col items-center">
        <Construction className="text-primary " size={64} />
        <span className="text-primary  text-xl font-semibold">
          Coming Soon !
        </span>
      </div>
    </div>
  );
}

export default ComingSoon;
