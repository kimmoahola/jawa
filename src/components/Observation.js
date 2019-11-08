import React from "react";
import { TempTsPair } from "./TempTsPair";

export function Observation({ data }) {
  return (
    <div>
      <div className="forecast-date">Nyt</div>

      <div className="weather-item">
        {data ? (
          <TempTsPair
            ts={data["observation"]["ts"]}
            temp={data["observation"]["temp"]}
            includeMinutes={true}
          />
        ) : (
          "N/A"
        )}
      </div>
    </div>
  );
}
