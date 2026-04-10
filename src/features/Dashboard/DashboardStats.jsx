import SummaryCard from "./SummaryCard";
import { Bookmark, CircleDollarSign, Users } from "lucide-react";

const summaryItems = [
  {
    id: "revenue",
    icon: CircleDollarSign,
    value: "$10,243.00",
    label: "Total Revenue",
    change: "+32.40%",
    trend: "up",
    iconColorClass: "text-indigo-400",
  },
  {
    id: "orders",
    icon: Bookmark,
    value: "$23,456",
    label: "Total Dish Ordered",
    change: "-12.40%",
    trend: "down",
    iconColorClass: "text-amber-400",
  },
  {
    id: "customers",
    icon: Users,
    value: "$1,234",
    label: "Total Customer",
    change: "+2.40%",
    trend: "up",
    iconColorClass: "text-cyan-400",
  },
];

function DashboardSummary() {
  return (
    <div className="grid grid-cols-3 gap-6 p-2">
      {summaryItems.map((item) => (
        <SummaryCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default DashboardSummary;
