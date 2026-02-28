import React, { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import { instance } from "../../api/axiosInstance";

export default function StatsCards() {
  const [overview, setOverview] = useState(null);

  // Fetch overview stats from API
  useEffect(() => {
    instance.get("/api/overview").then((res) => setOverview(res.data));
  }, []);

  // Prepare stats data with safe fallbacks
  const statsData = [
    {
      id: 1,
      title: "Total Users",
      subtitle: "5+ Increased from last month",
      value: overview?.totalUsers ?? 0,
      highlight: true,
    },
    {
      id: 2,
      title: "Active Users",
      subtitle: "5+ Increased from last month",
      value: overview?.activeUsers ?? 0,
    },
    {
      id: 3,
      title: "Revenue",
      subtitle: "5+ Increased from last month",
      value: `${overview?.revenue ?? 0}`,
    },
    {
      id: 4,
      title: "Growth",
      subtitle: "5+ Increased from last month",
      value: `${overview?.growth ?? 0}%`,
    },
  ];

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {statsData.map((stats) => (
        <StatsCard key={stats.id} {...stats} />
      ))}
    </div>
  );
}