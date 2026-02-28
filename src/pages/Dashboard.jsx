import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashBoardHeader from "../components/dashboard/DashboardHeader";
import DashboardContentHeader from "../components/dashboard/DashBoardContentHeader";
import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import ReminderCard from "../components/dashboard/ReminderCard";
import ProjectList from "../components/dashboard/ProjectList";

export default function Dashboard() {
  return (
    <div className="bg-base-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-4 lg:p-6 overflow-x-hidden">
        <DashBoardHeader />

        {/* dashboard content */}
        <div className="bg-base-200 my-4 p-4 rounded-2xl">
          {/* dashboard content header */}
          <DashboardContentHeader />

          {/* stat cards */}
          {/* <StatsCards /> */}

          {/* Middle section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
            <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                {/* <AnalyticsChart /> */}
              </div>
              {/* <ReminderCard /> */}
            </div>

            {/* <ProjectList /> */}
          </div>
        </div>
      </main>
    </div>
  );
}