import SummaryCard from "./SummaryCard";

function DashboardSummary() {
  return (
    <div className="grid grid-cols-3 gap-8  p-2">
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
    </div>
  );
}

export default DashboardSummary;
