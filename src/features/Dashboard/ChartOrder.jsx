import {
  ArrowDown,
  ArrowDownFromLine,
  ChevronDown,
  LucideArrowDownNarrowWide,
  Settings,
} from "lucide-react";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import SelectInput from "../../ui/SelectInput";

const data = [
  { name: "Delivery", value: 264, fill: "#4FC3F7" }, // bleu
  { name: "To Go", value: 122, fill: "#FFB74D" }, // orange
  { name: "Dine In", value: 200, fill: "#F06292" }, // rose
];

function ChartOrder() {
  return (
    <div className="w-full flex-col bg-base-dark-1 rounded-xl ">
      <header className="pt-6 pb-4 border-b-2 border-base-dark-line/50 px-2 justify-between flex items-center bg-base-dark-2 text-white">
        {" "}
        <h1 className="text-2xl font-semibold">Most Type Order </h1>
        <SelectInput
          options={["Today", "Last Week", "Last Month"]}
          icon={<ChevronDown size={20} className="text-white" />}
          onChange={(val) => console.log(val)}
        />
      </header>

      <div className="bg-base-dark-2 flex justify-center items-center pt-8    pb-10">
        {/* CHART */}
        <ResponsiveContainer width={250} height={250}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={120}
            barSize={15}
            data={data}
            startAngle={90} // ← commence en haut
            endAngle={-270} // ← fait le tour complet
          >
            <RadialBar
              dataKey="value"
              background={{ fill: "#2a2a3e" }} // fond sombre par layer
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        {/* LEGEND CUSTOM */}
        <div style={{ marginLeft: "20px" }}>
          {data.map((item) => (
            <div
              key={item.name}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              {/* cercle couleur */}
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: item.fill,
                  marginRight: "12px",
                }}
              />
              {/* texte */}
              <div>
                <p style={{ color: "#fff", margin: 0, fontWeight: "bold" }}>
                  {item.name}
                </p>
                <p style={{ color: "#888", margin: 0, fontSize: "12px" }}>
                  {item.value} customers
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChartOrder;
