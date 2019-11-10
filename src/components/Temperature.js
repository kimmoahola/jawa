import React from "react";

export function Temperature({ temperature }) {
  if (isNaN(temperature)) {
    return "(ei lämpötilatietoa)";
  }

  return (
    <div className="temperature">
      <span className="temperature-number">{Math.round(temperature)}</span>
      <span className="temperature-degree">°C</span>
    </div>
  );
}
