import DashboardPanel from "../features/Dashboard/DashboardPanel";
import TopBoardPanel from "../features/Dashboard/TopBoard";

function Dashboard() {
  return (
    //FLEX ROW 1/1
    //DASHBOARD
    //TOPBOARD
    <div className="bg-base-dark-1 flex h-full w-full gap-6 p-6">
      <div className=" flex-1 ">
        <DashboardPanel />
      </div>
      <div className="flex-1 ">
        <TopBoardPanel />
      </div>
    </div>
  );
}

export default Dashboard;
