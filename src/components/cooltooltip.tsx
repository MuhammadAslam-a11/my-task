"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
AnimatedTooltip
const people = [
  {
    id: 1,
    name: "Muhammad Aslam",
    designation: "Content writer",
    image: "/Aslam.jpg"
    
  },
 
];

export function cooltooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items ={people} />
    </div>
  );
}

export default cooltooltip