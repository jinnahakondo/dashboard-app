import { ArrowUpRight } from "lucide-react";

export default function StatsCard({ title, value, subtitle, highlight }) {
  return (
    <div
      className={`card p-5 relative transition ${
        highlight ? "bg-success text-success-content" : "bg-base-100"
      }`}
    >
      {/* Card title */}
      <p className="text-lg sm:text-2xl font-semibold mt-2">{title}</p>

      {/* Main value */}
      <h2 className="text-3xl sm:text-4xl font-bold mt-3">{value}</h2>

      {/* Subtitle */}
      <p className="mt-2 opacity-70">{subtitle}</p>

      {/* Top-right icon */}
      <span className="absolute  right-3 top-5 md:right-5 opacity-70 rounded-full bg-base-100 border p-2">
        <ArrowUpRight size={16} />
      </span>
    </div>
  );
}