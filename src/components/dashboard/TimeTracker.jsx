import React, { useEffect, useState } from "react";
import { Pause, Square } from "lucide-react";

export default function TimeTracker() {
  const [seconds, setSeconds] = useState(5048);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0",
    );
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="w-full rounded-2xl p-6 text-white bg-linear-to-t to-green-950 from-green-700 relative overflow-hidden mt-4">
      {/* Title */}
      <h2 className="text-lg font-medium">Time Tracker</h2>

      {/* Time display */}
      <p className="text-4xl font-bold mt-4 tracking-wider">
        {formatTime(seconds)}
      </p>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="w-12 h-12 rounded-full bg-white text-green-900 flex items-center justify-center"
        >
          <Pause size={22} />
        </button>

        <button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
          className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center"
        >
          <Square size={22} />
        </button>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,green,transparent_60%)]"></div>
    </div>
  );
}
