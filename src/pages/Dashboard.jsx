import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashBoardHeader from "../components/dashboard/DashboardHeader";
import DashboardContentHeader from "../components/dashboard/DashBoardContentHeader";
import StatsCard from "../components/dashboard/StatsCard";
import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";

export default function Dashboard() {
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
          {/* Middle */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="col-span-2">
             <AnalyticsChart />
           </div>
            {/* <ReminderCard />
            <ProjectList /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
