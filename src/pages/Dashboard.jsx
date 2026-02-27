import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashBoardHeader from "../components/dashboard/DashboardHeader";
import DashboardContentHeader from "../components/dashboard/DashBoardContentHeader";
import StatsCard from "../components/dashboard/StatsCard";
import StatsCards from "../components/dashboard/StatsCards";

export default function Dashboard() {
  const statsData = [
    {
      id: 1,
      title: "Total Projects",
      value: 24,
      subtitle: "5+ Increased from last month",
      highlight: true,
    },
    {
      id: 2,
      title: "Ended Projects",
      value: 10,
      subtitle: "6+ Increased from last month",
      highlight: false,
    },
    {
      id: 3,
      title: "Running Projects",
      value: 12,
      subtitle: "2+ Increased from last month",
      highlight: false,
    },
    {
      id: 4,
      title: "Pending Project",
      value: 2,
      subtitle: "On Discuss",
      highlight: false,
    },
  ];

  return (
    <div className="bg-base-100 p-4 flex gap-4 ">
      <aside>
        <Sidebar />
      </aside>
      <div className="w-full">
        <DashBoardHeader />
        {/* dashboard content  */}
        <div className="bg-base-200 my-4 p-4 rounded-2xl">
          {/* dashboard content heaeder  */}
          <DashboardContentHeader />
          {/* stat cards */}
          <StatsCards />
        </div>
      </div>
    </div>
  );
}
