import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import { instance } from "../../api/axiosInstance";

const rawData = [
  { date: "2024-01-01", views: 1234, clicks: 456, conversions: 23 },
  { date: "2024-01-02", views: 900, clicks: 300, conversions: 15 },
  { date: "2024-01-03", views: 1500, clicks: 600, conversions: 30 },
  { date: "2024-01-04", views: 1100, clicks: 400, conversions: 20 },
  { date: "2024-01-05", views: 800, clicks: 250, conversions: 10 },
  { date: "2024-01-06", views: 1300, clicks: 500, conversions: 25 },
  { date: "2024-01-07", views: 1700, clicks: 700, conversions: 40 },
];

export default function AnalyticsChart() {
  const [charData, setChartData] = useState([]);
  useEffect(() => {
    instance
      .get("/api/analytics")
      .then((res) => {
        // convert the date into day from data
        const data = res.data.map((item) => {
          const day = new Date(item.date).toLocaleDateString("en-US", {
            weekday: "narrow",
          });
          // return modifyed data
          return {
            day,
            views: item.views,
            clicks: item.clicks,
            conversions: item.conversions,
          };
        });
        //set chart Data
        setChartData(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  console.log(charData);
  return (
    <div className="card bg-base-100 mt-4 rounded-2xl">
      <div className="card-body">
        <h2 className="font-semibold mb-2">Project Analytics</h2>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={charData} barCategoryGap={10} barSize={30}>
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide />

            <Bar dataKey="views" fill="red" radius={[20, 20, 20, 20]} />
            <Bar dataKey="clicks" fill="blue" radius={[20, 20, 20, 20]} />
            <Bar dataKey="conversions" fill="green" radius={[20, 20, 20, 20]} />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
