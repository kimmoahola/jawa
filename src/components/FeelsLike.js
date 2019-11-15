import React from "react";

// https://web.archive.org/web/20050413234644/http://www.fmi.fi/scr/tuotteet/PakkasenPurevuus/funcs.js
function frost(t, v) {
  return (
    13.12 +
    0.6215 * t -
    13.956 * Math.pow(v, 0.16) +
    0.4867 * t * Math.pow(v, 0.16)
  );
}

export function FeelsLike({ temperature, windspeedms }) {
  let className = "";
  let text = "";

  if (!Number.isFinite(temperature) || !Number.isFinite(windspeedms)) {
    text = "";
  } else {
    const feelsLikeTemperature = frost(temperature, windspeedms);
    const diff = Math.abs(feelsLikeTemperature - temperature);
    if (diff < 3) {
      text = "";
    } else {
      text = `Tuntuu kuin ${Math.round(feelsLikeTemperature)}°C`;

      if (diff > 7) {
        className = "warning-text";
      } else {
        className = "light-text";
      }
    }
  }

  return <div className={className}>{text}</div>;
}
