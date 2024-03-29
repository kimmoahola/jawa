import React from "react";

export function Temperature({ temperature }) {
  return !Number.isFinite(temperature) ? (
    <div>(ei lämpötilatietoa)</div>
  ) : (
    <div className="temperature">
      <span className="temperature-number">{Math.round(temperature)}</span>
      <span className="temperature-degree">°C</span>
    </div>
  );
}
