import React from "react";
import { TempWindPrecip } from "./TempWindPrecip";
import { Time } from "./Time";

function nextHourForecast({ forecastData }) {
  if (!forecastData) {
    return undefined;
  }
  for (const iterator of forecastData) {
    for (const hour of iterator.items) {
      if (hour.ts >= new Date()) {
        return hour;
      }
    }
  }
}

export function Observation({ data, forecastData }) {
  const nextHour = nextHourForecast({ forecastData });

  return (
    <div>
      <div className="forecast-date">Nyt</div>
      <div className="weather-container">
        <div className="weather-item">
          {data ? (
            <>
              <Time ts={data["ts"]} includeMinutes />
              <TempWindPrecip
                temperature={data["temperature"]}
                windspeedms={data["windspeedms"]}
                precipitation1h={data["precipitation1h"]}
              />
            </>
          ) : (
            "N/A"
          )}
        </div>

        {nextHour ? (
          <div className="weather-item">
            <Time ts={nextHour["ts"]} />
            <TempWindPrecip
              temperature={nextHour["temperature"]}
              windspeedms={nextHour["windspeedms"]}
              precipitation1h={nextHour["precipitation1h"]}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
