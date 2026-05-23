//HEADER
//REPORTS

import { Avatar, AvatarImage } from "../../components/ui/avatar";
import { Settings } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const MOCK_ORDERS = [
  {
    id: 1,
    name: "Eren Jaegar",
    menu: "Spicy seasoned seafood noodles",
    amount: "$125",
    status: "completed",
  },
  {
    id: 2,
    name: "Reiner Braun",
    menu: "Salted pasta with mushroom sauce",
    amount: "$145",
    status: "preparing",
  },
  {
    id: 3,
    name: "Levi Ackerman",
    menu: "Beef dumpling in hot and sour soup",
    amount: "$105",
    status: "pending",
  },
  {
    id: 4,
    name: "Historia Reiss",
    menu: "Hot spicy fried rice with omelet",
    amount: "$45",
    status: "completed",
  },
  {
    id: 5,
    name: "Hanji Zoé",
    menu: "Hot spicy fried rice with omelet",
    amount: "$245",
    status: "completed",
  },
];

function DashboardReports() {
  return (
    <div className="flex flex-col   rounded-xl bg-base-dark-2">
      {" "}
      <header className="pt-6 pb-4 px-5 flex justify-between items-center">
        {" "}
        <h1 className="text-2xl font-semibold text-white">Order Report</h1>
        <div className="flex items-center gap-2 px-4 py-2 border-2 border-base-dark-1 rounded-2xl text-white">
          <Settings size={16} />
          <p>Filter Settings</p>
        </div>
      </header>
      <section className="max-h-[400px] overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Menu</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {MOCK_ORDERS.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>

                    <span>{order.name}</span>
                  </div>
                </TableCell>

                <TableCell className="text-white/60">{order.menu}</TableCell>

                <TableCell>{order.amount}</TableCell>

                <TableCell>
                  <Badge variant={order.status}>{order.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}

export default DashboardReports;
