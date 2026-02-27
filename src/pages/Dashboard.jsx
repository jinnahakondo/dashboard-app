import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashBoardHeader from "../components/dashboard/DashboardHeader";
import DashboardContentHeader from "../components/dashboard/DashBoardContentHeader";

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
        </div>
      </div>
    </div>
  );
}
