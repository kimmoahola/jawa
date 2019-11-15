import React from "react";

export function Wind({ windspeedms }) {
  let className = "";
  let text = "";

  if (!Number.isFinite(windspeedms)) {
    className = "light-text";
    text = "(ei tuulitietoa)";
  } else {
    if (windspeedms > 6) {
      className = "warning-text";
      text = `Navakka tuuli (${Math.round(windspeedms)} m/s)`;
    } else if (windspeedms > 4.5) {
      text = "Kohtalainen tuuli";
    } else if (windspeedms > 3) {
      className = "light-text";
      text = "Heikko tuuli";
    }
  }

  return <div className={className}>{text}</div>;
}
