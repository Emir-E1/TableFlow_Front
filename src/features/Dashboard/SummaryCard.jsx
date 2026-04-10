import { ArrowDown, ArrowUp } from "lucide-react";

function SummaryCard({
  icon: Icon,
  value,
  label,
  change,
  trend = "up",
  iconColorClass = "text-secondary",
}) {
  const isUp = trend === "up";
  const TrendIcon = isUp ? ArrowUp : ArrowDown;

  return (
    <article className="rounded-2xl bg-base-dark-2 p-6">
      <div className="mb-6 flex items-center gap-3">
        <span className="rounded-xl bg-base-dark-1 p-3">
          {Icon && <Icon className={iconColorClass} size={24} />}
        </span>
        <span
          className={`text-2xl font-semibold ${
            isUp ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {change}
        </span>
        <span
          className={`rounded-full p-1.5 ${
            isUp ? "bg-emerald-500/20" : "bg-rose-500/20"
          }`}
        >
          <TrendIcon
            size={14}
            className={isUp ? "text-emerald-300" : "text-rose-300"}
          />
        </span>
      </div>
      <h2 className="text-3xl font-semibold text-white">{value}</h2>
      <p className="mt-2 text-2xl text-slate-400">{label}</p>
    </article>
  );
}

export default SummaryCard;
