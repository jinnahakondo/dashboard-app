import { ArrowUpRight } from "lucide-react";

export default function StatsCard({ title, value, subtitle, highlight }) {
  return (
    <div
      className={`card p-5 relative ${
        highlight ? "bg-success text-success-content" : "bg-base-100"
      }`}
    >
      <p className="text-2xl font-semibold mt-2">{title}</p>

      <h2 className="text-4xl font-bold mt-3">{value}</h2>
      <p className=" mt-2 opacity-70">{subtitle}</p>

      <span className="absolute top-7 right-7 opacity-70 rounded-full bg-base-100 border p-2">
        <ArrowUpRight size={20} />
      </span>
    </div>
  );
}
