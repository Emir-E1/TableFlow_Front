//HEADER------

import DashboardHeader from "./DashboardHeader";
import DashboardReports from "./DashboardReports";
import DashboardSummary from "./DashboardStats";

function DashboardPanel() {
  return (
    <div className="flex min-h-0 flex-col gap-6">
      <DashboardHeader />
      <DashboardSummary />
      <DashboardReports />
    </div>
  );
}

export default DashboardPanel;
