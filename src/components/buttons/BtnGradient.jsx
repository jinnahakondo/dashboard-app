import React from "react";

export default function BtnGradient({ children, className }) {
  return (
    <button
      className={`btn bg-linear-to-t to-green-950 from-green-700 text-primary-content rounded-full gap-2 ${className}`}
    >
      {children}
    </button>
  );
}
