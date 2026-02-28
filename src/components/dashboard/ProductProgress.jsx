import { PieChart, Pie, ResponsiveContainer } from "recharts";

export default function ProductProgress() {
  const completed = 41;
  const inProgress = 25;
  const pending = 100 - completed - inProgress;

  return (
    <div className="card bg-base-100 rounded-2xl p-6">
      <h2 className="font-semibold mb-4">Project Progress</h2>

      <div className="relative w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Striped pattern for pending */}
            <defs>
              <pattern
                id="stripe"
                width="6"
                height="6"
                patternUnits="userSpaceOnUse"
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

            {/* Pending (striped, background arc) */}
            <Pie
              data={[{ value: 100 }]}
              dataKey="value"
              startAngle={180}
              endAngle={0}
              innerRadius={70}
              outerRadius={90}
              fill="url(#stripe)"
              stroke="none"
            />

            {/* In Progress (dark green arc) */}
            <Pie
              data={[{ value: inProgress }]}
              dataKey="value"
              startAngle={180 - pending * 1.8}
              endAngle={180 - (pending + inProgress) * 1.8}
              innerRadius={70}
              outerRadius={90}
              fill="#134E2A"
              stroke="none"
            />

            {/* Completed (green arc) */}
            <Pie
              data={[{ value: completed }]}
              dataKey="value"
              startAngle={180 - (pending + inProgress) * 1.8}
              endAngle={180 - (pending + inProgress + completed) * 1.8}
              innerRadius={70}
              outerRadius={90}
              fill="#2F855A"
              stroke="none"
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-6">
          <span className="text-4xl font-bold">{completed}%</span>
          <span className="text-sm text-green-600">Project Ended</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-between mt-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#2F855A]"></span>
          Completed
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#134E2A]"></span>
          In Progress
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 border bg-[url(#stripe)]"></span>
          Pending
        </div>
      </div>
    </div>
  );
}
