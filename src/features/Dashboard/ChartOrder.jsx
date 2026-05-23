import { ChevronDown } from "lucide-react";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import SelectInput from "../../ui/SelectInput";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Delivery", value: 264, fill: "#4FC3F7" },
  { name: "To Go", value: 122, fill: "#FFB74D" },
  { name: "Dine In", value: 200, fill: "#F06292" },
];

function ChartOrder() {
  return (
    <Card className="w-full bg-base-dark-2 border-base-dark-line">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-white text-2xl">Most Type Order</CardTitle>

        <SelectInput
          options={["Today", "Last Week", "Last Month"]}
          icon={<ChevronDown size={20} className="text-white" />}
          onChange={(val) => console.log(val)}
        />
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-center gap-6">
          <ResponsiveContainer width={250} height={250}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={120}
              barSize={15}
              data={data}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar
                dataKey="value"
                background={{ fill: "#2a2a3e" }}
                cornerRadius={10}
              />
            </RadialBarChart>
          </ResponsiveContainer>

          <div className="flex flex-col gap-5">
            {data.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <div
                  className="h-3.5 w-3.5 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />

                <div>
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-xs text-white/50">
                    {item.value} customers
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ChartOrder;
