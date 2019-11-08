import React from "react";

export function Temperature({ temp }) {
  return (
    <span className="temperature">
      <span className="temperature-number">{Math.round(temp)}</span>
      <span className="temperature-degree">°C</span>
    </span>
  );
}
