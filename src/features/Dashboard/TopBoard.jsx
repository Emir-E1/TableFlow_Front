//TOP ORDERED
//TOP STATS

import ChartOrder from "./ChartOrder";
import MostOrdered from "./MostOrdered";

function TopBoardPanel() {
  return (
    <div className="flex flex-col justify-center items-center   gap-4">
      <MostOrdered />
      <ChartOrder />
    </div>
  );
}

export default TopBoardPanel;
