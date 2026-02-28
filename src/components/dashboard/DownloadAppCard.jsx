import React from "react";
import { Download } from "lucide-react";

export default function DownloadAppCard() {
  return (
    <div className="relative w-full rounded-2xl p-6 text-white overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-black">
      {/* Icon */}
      <div className="w-7 h- rounded-full bg-white/10 flex items-center justify-center">
        <Download size={20} />
      </div>

      {/* Title */}
      <h2 className="mt-2 text-sm font-semibold">
        Download our <br /> Mobile App
      </h2>

      {/* Subtitle */}
      <p className="text-xs text-white/70 mt-1">Get easy in another way</p>

      {/* Button */}
      <button className="mt-2 w-full py-3 btn btn-xs rounded-full">Download</button>

      {/* Curved background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-56 h-56 border border-green-500/30 rounded-full"></div>
        <div className="absolute -bottom-16 -left-16 w-72 h-72 border border-green-500/20 rounded-full"></div>
      </div>
    </div>
  );
}
