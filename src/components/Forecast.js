import React from "react";
import { TempWindPrecip } from "./TempWindPrecip";
import { Date } from "./Date";
import { INTERESTING_HOURS } from "../config";
import { Time } from "./Time";

function filterByInterestingHours(arr) {
  return arr.filter(v => INTERESTING_HOURS.indexOf(v["ts"].getHours()) !== -1);
}

function ForOneDay({ dayData }) {
  const filtered = filterByInterestingHours(dayData["items"]);

  if (filtered.length === 0) {
    return "";
  }

  return (
    <>
      <div className="forecast-date">
        <Date ts={dayData["startOfDay"]} />
      </div>
      <div className="weather-container">
        {[...Array(INTERESTING_HOURS.length - filtered.length).keys()].map(
          (_, index2) => (
            <div key={index2} className="weather-item weather-item-empty"></div>
          )
        )}
        {filtered.map((i, index2) => (
          <div key={index2} className="weather-item">
            <Time ts={i["ts"]} />

            <div className="weather-values">
              <TempWindPrecip
                temperature={i["temperature"]}
                windspeedms={i["windspeedms"]}
                precipitation1h={i["precipitation1h"]}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function Forecast({ data }) {
  return (
    <>
      {data
        ? data.map((d, index1) => <ForOneDay key={index1} dayData={d} />)
        : ""}
    </>
  );
}
