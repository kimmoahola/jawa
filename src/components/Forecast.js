import React from "react";
import { TempWindPrecip } from "./TempWindPrecip";
import { DateInfo } from "./DateInfo";
import { INTERESTING_HOURS } from "../config";
import { Time } from "./Time";
import { addHours, isSameDay } from "date-fns";

function filterByInterestingHours2({ items, startOfDay }) {
  const interestingHours = [
    new Date(),
    addHours(new Date(), 1),
    addHours(new Date(), 2)
  ]
    .filter(d => isSameDay(d, startOfDay))
    .map(d => d.getHours())
    .concat(INTERESTING_HOURS);

  return items.filter(v => interestingHours.indexOf(v["ts"].getHours()) !== -1);
}

function ForOneDay({ dayData }) {
  const filtered = filterByInterestingHours2({
    items: dayData["items"],
    startOfDay: dayData["startOfDay"]
  });

  if (filtered.length === 0) {
    return null;
  }

  return (
    <>
      <div className="forecast-date">
        <DateInfo ts={dayData["startOfDay"]} />
      </div>
      <div className="weather-container">
        {filtered.map((i, index) => (
          <div key={index} className="weather-item">
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
  if (!data) {
    return null;
  }
  return (
    <>
      {data.map((d, index1) => (
        <ForOneDay key={index1} dayData={d} />
      ))}
    </>
  );
}
