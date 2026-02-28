import React from "react";

export default function BtnGradient({ children }) {
  return (
    <button className="btn btn-xl bg-linear-to-t to-[#165436] from-[#1e8054] text-white rounded-full gap-2 ">
      {children}
    </button>
  );
}
