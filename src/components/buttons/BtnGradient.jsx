import React from "react";

export default function BtnGradient({ children, className }) {
  return (
    <button
      className={`btn bg-linear-to-t to-[#165436] from-[#1e8054] text-white rounded-full gap-2 ${className}`}
    >
      {children}
    </button>
  );
}
