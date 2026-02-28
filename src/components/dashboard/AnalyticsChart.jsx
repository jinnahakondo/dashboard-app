import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Tooltip,
} from "recharts";
import { instance } from "../../api/axiosInstance";

//  Custom Bar Component
const CustomBar = (props) => {
  const { x, y, width, height, index } = props;

  let fillColor = "url(#stripe)";

  if (index === 2) {
    fillColor = "#67C08E";
  } else if (index === 3) {
    fillColor = "#134E2A";
  }

  return (
    <rect x={x} y={y} width={width} height={height} rx={20} fill={fillColor} />
  );
};

export default function AnalyticsChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    instance.get("/api/analytics").then((res) => {
      const data = res.data.map((item) => {
        const day = new Date(item.date).toLocaleDateString("en-US", {
          weekday: "narrow",
        });

        return {
          day,
          value: item.views,
        };
      });

      setChartData(data);
    });
  }, []);

  return (
    <div className="card bg-base-100 rounded-2xl">
      <div className="card-body">
        <h2 className="font-semibold mb-4">Project Analytics</h2>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData} barSize={34} barCategoryGap={18}>
            {/* Pattern */}
            <defs>
              <pattern
                id="stripe"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="6"
                  stroke="#9DB6A6"
                  strokeWidth="2"
                />
              </pattern>
            </defs>

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
            />

            <Tooltip cursor={false} />

            <Bar
              dataKey="value"
              radius={[20, 20, 20, 20]}
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
