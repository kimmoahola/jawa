import React from "react";

export function Precipitation({ precipitation1h }) {
  let className = "";
  let text = "";

  if (isNaN(precipitation1h)) {
    className = "light-text";
    text = "(ei sadetietoa)";
  } else {
    if (precipitation1h > 1) {
      className = "warning-text";
      text = `Voimakas sade (${precipitation1h.toFixed(1)} mm/h)`;
    } else if (precipitation1h > 0.3) {
      text = "Kohtalainen sade";
    } else if (precipitation1h > 0) {
      className = "light-text";
      text = "Heikko sade";
    }
  }

  return <div className={className}>{text}</div>;
}
