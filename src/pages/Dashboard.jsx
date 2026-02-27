import React from "react";
import Sidebar from "../components/dashboard/Sidebar";

export default function Dashboard() {
  return (
    <div className="bg-base-100 p-4 ">
      <aside>
        <Sidebar />
      </aside>
    </div>
  );
}
