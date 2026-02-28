import React from "react";

export default function LoginPageLeft() {
  return (
    // Hidden on small screens, visible on large screens
    <div className="hidden lg:flex w-full h-full bg-green-900 text-white flex-col justify-center px-8 xl:px-16 py-12">
      
      {/* Headline section */}
      <div className="mb-10">
        <h1 className="text-3xl xl:text-4xl font-bold leading-tight">
          Plan, prioritize, <br />
          <span className="text-green-400">accomplish</span> with ease.
        </h1>

        <p className="mt-6 text-gray-200 max-w-md">
          The modern project management platform designed to keep your team
          aligned and your goals within reach.
        </p>
      </div>

      {/* Project card */}
      <div className="bg-green-800 p-4 rounded-lg w-full max-w-md">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          <span className="ml-auto text-sm">Join 10k+ productive teams</span>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-green-600 rounded-full relative overflow-hidden">
          <div
            className="h-2 bg-green-400 rounded-full"
            style={{ width: "74%" }}
          ></div>
        </div>

        <p className="mt-1 text-xs text-gray-300">
          74% overall project completion rate this month
        </p>
      </div>
    </div>
  );
}