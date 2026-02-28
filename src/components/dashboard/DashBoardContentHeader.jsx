import { Plus } from "lucide-react";
import BtnGradient from "../buttons/BtnGradient";

export default function DashboardContentHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
      {/* Left section: title and description */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-base-content/60">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>

      {/* Right section: action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Add project button */}
        <BtnGradient className="md:btn-lg">
          <Plus size={20} />
          Add Project
        </BtnGradient>

        {/* Import data button */}
        <button
          className="btn md:btn-lg bg-transparent border border-[#165436] 
                           text-[#165436] hover:bg-linear-to-l hover:text-white 
                           to-[#165436] from-[#1e8054] rounded-full gap-2"
        >
          Import Data
        </button>
      </div>
    </div>
  );
}
