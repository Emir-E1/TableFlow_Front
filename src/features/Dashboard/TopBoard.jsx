//TOP ORDERED
//TOP STATS

import ChartOrder from "./ChartOrder";
import MostOrdered from "./MostOrdered";

function TopBoardPanel() {
  return (
    <div className="flex flex-col h-full justify-between">
      <MostOrdered />
      <ChartOrder />
    </div>
  );
}

export default TopBoardPanel;
