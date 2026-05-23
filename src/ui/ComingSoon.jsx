import { Construction } from "lucide-react";

function ComingSoon() {
  return (
    <div className="w-full min-h-screen flex  justify-center items-center ">
      <div className="flex flex-col text-primary font-semibold items-center">
        <Construction className="text-primary" size={64} />
        <h1 className=" text-xl ">Coming Soon !</h1>
        <h2>'Figma-Concept-UI'</h2>
      </div>
    </div>
  );
}

export default ComingSoon;
