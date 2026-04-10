//HEADER
//REPORTS

import { Settings } from "lucide-react";
const MOCK_ORDERS = [
  {
    id: 1,
    name: "Eren Jaegar",
    menu: "Spicy seasoned seafood noodles",
    amount: "$125",
    status: "Completed",
  },
  {
    id: 2,
    name: "Reiner Braun",
    menu: "Salted pasta with mushroom sauce",
    amount: "$145",
    status: "Preparing",
  },
  {
    id: 3,
    name: "Levi Ackerman",
    menu: "Beef dumpling in hot and sour soup",
    amount: "$105",
    status: "Pending",
  },
  {
    id: 4,
    name: "Historia Reiss",
    menu: "Hot spicy fried rice with omelet",
    amount: "$45",
    status: "Completed",
  },
  {
    id: 5,
    name: "Hanji Zoé",
    menu: "Hot spicy fried rice with omelet",
    amount: "$245",
    status: "Completed",
  },
];

const STATUS_STYLES = {
  Completed: "bg-teal-500/20 text-teal-400",
  Preparing: "bg-purple-500/20 text-purple-300",
  Pending: "bg-amber-500/20 text-amber-400",
};

function DashboardReports() {
  return (
    <div className="flex flex-col rounded-xl bg-base-dark-2">
      {" "}
      {/* ✅ flex-col */}
      <header className="pt-6 pb-4 px-5 flex justify-between items-center">
        {" "}
        {/* ✅ px-5 aligné avec les rows */}
        <h1 className="text-2xl font-semibold text-white">Order Report</h1>
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-base-dark-1 rounded-2xl text-white">
          <Settings size={16} />
          <p>Filter Settings</p>
        </div>
      </header>
      <section className="flex flex-col overflow-hidden max-h-[400px]">
        {/* ✅ Vrais labels de colonnes */}
        <div className="grid grid-cols-4 px-5 py-3 border-b border-white/10">
          <span className="text-xs text-white/50 uppercase tracking-wider">
            Customer
          </span>
          <span className="text-xs text-white/50 uppercase tracking-wider">
            Menu
          </span>
          <span className="text-xs text-white/50 uppercase tracking-wider">
            Amount
          </span>
          <span className="text-xs text-white/50 uppercase tracking-wider">
            Status
          </span>
        </div>

        <div className="overflow-y-auto">
          {MOCK_ORDERS.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-4 items-center px-5 py-4 border-b border-white/5 last:border-none text-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-yellow-400 shrink-0" />
                <span className="text-white/90">{order.name}</span>
              </div>
              <span className="text-white/60 pr-3">{order.menu}</span>
              <span className="text-white/85">{order.amount}</span>
              {/* ✅ inline-flex + w-fit pour que le badge reste en pill */}
              <div
                className={`justify-center inline-flex w-fit px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[order.status]}`}
              >
                {order.status}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardReports;
