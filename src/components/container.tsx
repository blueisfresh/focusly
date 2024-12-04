import React from "react";

export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="max-w-[1100px] mx-auto bg-white"> {children} </div>;
}
