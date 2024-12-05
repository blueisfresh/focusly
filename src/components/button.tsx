import React from "react";

// Removed mb-2 to get it aligned

export default function Button({ children }: { children: string }) {
  return (
    <button className="text-white text-xl bg-slate-700 hover:bg-slate-800 font-medium rounded-lg px-5 py-2.5 me-2">
      {children}
    </button>
  );
}
