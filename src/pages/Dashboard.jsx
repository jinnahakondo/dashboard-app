import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashBoardHeader from "../components/dashboard/DashboardHeader";
import DashboardContentHeader from "../components/dashboard/DashBoardContentHeader";
import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsChart from "../components/dashboard/AnalyticsChart";
import ReminderCard from "../components/dashboard/ReminderCard";
import ProductList from "../components/dashboard/ProductList";
import Team from "../components/dashboard/Team";
import ProductProgress from "../components/dashboard/ProductProgress";
import TimeTracker from "../components/dashboard/TimeTracker";

export default function Dashboard() {
  return (
    <div className="bg-base-100 min-h-screen flex ">
      {/* Sidebar section */}
      <div className="min-h-screen">
        <Sidebar />
      </div>

      {/* Main dashboard area */}
      <main className="flex-1 p-3 sm:p-4 lg:p-6 overflow-x-hidden">
        {/* Top header */}
        <DashBoardHeader />

        {/* Content wrapper */}
        <div className="bg-base-200 my-4 p-3 sm:p-4 rounded-2xl">
          {/* Content header */}
          <DashboardContentHeader />

          {/* Statistics cards */}
          <StatsCards />

          {/* Middle layout section */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 mt-4">
            {/* Left content area */}
            <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {/* Analytics chart */}
              <div className="md:col-span-2">
                <AnalyticsChart />
              </div>

              {/* Reminder card */}
              <ReminderCard />

              {/* Team section */}
              <div className="md:col-span-2">
                <Team />
              </div>

              {/* Project progress */}
              <ProductProgress />
              {/* time tracker  */}
            </div>

            {/* Product list section */}
            <div className="mt-2 xl:mt-0">
              <ProductList />
              <TimeTracker/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
