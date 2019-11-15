import React from "react";
import { TempWindPrecip } from "./TempWindPrecip";
import { DateInfo } from "./DateInfo";
import { INTERESTING_HOURS } from "../config";
import { Time } from "./Time";
import { addHours, isSameDay } from "date-fns";
import { hslToRgb, pickHex } from "../utils";

function temperatureBackgroundColor({ temperature }) {
  if (!Number.isFinite(temperature)) {
    return undefined;
  }

  const minTemp = -10;
  const maxTemp = 25;

  const lighterColdRgb = hslToRgb(245 / 360, 0.8, 0.16);
  const darkerColdRgb = hslToRgb(245 / 360, 0.85, 0.12);
  const lighterWarmRgb = hslToRgb(340 / 360, 0.85, 0.16);
  const darkerWarmRgb = hslToRgb(340 / 360, 0.85, 0.14);

  const ratio = Math.min(
    Math.max((1 / (maxTemp - minTemp)) * (temperature - minTemp), 0),
    1
  );

  const rgbLighter = `rgb(${pickHex(
    lighterWarmRgb,
    lighterColdRgb,
    ratio
  ).join()})`;

  const rgbDarker = `rgb(${pickHex(
    darkerWarmRgb,
    darkerColdRgb,
    ratio
  ).join()})`;

  const result = {
    backgroundImage: `repeating-linear-gradient(
      45deg,
      ${rgbLighter},
      ${rgbLighter} 0.8em,
      ${rgbDarker} 0.8em,
      ${rgbDarker} 1.6em
    )`
  };

  return result;
}

function filterByInterestingHours({ items, startOfDay }) {
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
  const filtered = filterByInterestingHours({
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
          <div
            key={index}
            className="weather-item"
            style={{
              ...temperatureBackgroundColor({
                temperature: i["temperature"]
              })
            }}
          >
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
