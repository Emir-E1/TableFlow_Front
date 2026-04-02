//icone
//label
//data
//....//

import { ArrowUp, CircleDollarSign } from "lucide-react";

//container---> //indicator ----> //data -----> //labell

function SummaryCard() {
  return (
    <div className="flex flex-col p-6 rounded-xl  gap-6 bg-base-dark-2">
      <div className="flex items-center gap-2">
        <span className="p-2  bg-base-dark-1 rounded-xl ">
          <CircleDollarSign className="text-secondary" size={24} />
        </span>
        <span className="text-green-500">+32.40 %</span>
        <span className="p-1 bg-emerald-700 rounded-full ">
          <ArrowUp color="white" size={14} />
        </span>
      </div>
      <h2 className="font-semibold text-white text-2xl">$10,243.00</h2>
      <label className="text-white">Total Revenue</label>
    </div>
  );
}

export default SummaryCard;
