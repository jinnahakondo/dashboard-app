import React, { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import { instance } from "../../api/axiosInstance";

export default function StatsCards() {
  const [overview, setOverview] = useState({});
  const statsData = [
    {
      title: "Total Users",
      subtitle: "5+ Increased from last month",
      value: overview.totalUsers,
      highlight: true,
    },
    {
      title: "Active Users",
      subtitle: "5+ Increased from last month",
      value: overview.activeUsers,
    },
    {
      title: "Revenue",
      subtitle: "5+ Increased from last month",
      value: `$${overview.revenue}`,
    },
    {
      title: "Growth",
      subtitle: "5+ Increased from last month",
      value: `${overview.growth}%`,
    },
  ];
  useEffect(() => {
    instance.get("/api/overview").then((res) => setOverview(res.data));
  }, []);

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {statsData.map((stats) => (
        <StatsCard key={stats.id} {...stats} />
      ))}
    </div>
  );
}
