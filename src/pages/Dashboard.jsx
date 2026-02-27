import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashBoardHeader from "../components/dashboard/DashboardHeader";

export default function Dashboard() {
  return (
    <div className="bg-base-100 p-4 flex gap-4 ">
      <aside>
        <Sidebar />
      </aside>
      <div className="w-full">
        <DashBoardHeader />
      </div>
    </div>
  );
}
