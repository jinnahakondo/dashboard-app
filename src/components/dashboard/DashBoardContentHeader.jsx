import { Plus } from "lucide-react";

export default function DashboardContentHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-base-content/60">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>

      <div className="flex gap-3">
        <button className="btn btn-xl bg-linear-to-l to-[#165436] from-[#1e8054] text-white rounded-full gap-2 ">
          <Plus size={20} />
          Add Project
        </button>
        <button className="btn btn-xl bg-transparent border border-[#165436] text-[#165436] hover:bg-linear-to-l hover:text-white to-[#165436] from-[#1e8054] rounded-full gap-2 ">
          Import Data
        </button>
      </div>
    </div>
  );
}
