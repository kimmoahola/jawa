import React, { useState, useEffect } from "react";
import { fetchForecast, fetchObservation } from "../api";
import {
  FORECAST_REFRESH_INTERVAL,
  OBSERVATION_REFRESH_INTERVAL
} from "../config";
import { Weather } from "./Weather";

const DATA_CHECK_INTERVAL = 30 * 1000;

export function DataLayer({ place }) {
  const [forecastData, setForecastData] = useState(undefined);
  const [lastForecastDataAttempt, setLastForecastDataAttempt] = useState(
    undefined
  );
  const [observationData, setObservationData] = useState(undefined);
  const [lastObservationDataAttempt, setLastObservationDataAttempt] = useState(
    undefined
  );
  const [mark, setMark] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setMark(m => m + 1), DATA_CHECK_INTERVAL);
    return () => clearTimeout(timer);
  }, [mark]);

  useEffect(() => {
    async function fetchData() {
      setForecastData(await fetchForecast({ place }));
    }

    const logData = {
      forecastData: !!forecastData,
      lastForecastDataAttempt: lastForecastDataAttempt,
      "Date.now() - lastForecastDataAttempt":
        lastForecastDataAttempt && Date.now() - lastForecastDataAttempt,
      FORECAST_REFRESH_INTERVAL: FORECAST_REFRESH_INTERVAL
    };

    if (
      !forecastData ||
      (forecastData &&
        lastForecastDataAttempt &&
        Date.now() - lastForecastDataAttempt > FORECAST_REFRESH_INTERVAL)
    ) {
      console.log("Need forecast data refresh", logData);

      setLastForecastDataAttempt(Date.now());
      fetchData();
    } else {
      console.log("No need for forecast data refresh", logData);
    }
    // eslint-disable-next-line
  }, [mark, place]);

  useEffect(() => {
    async function fetchData() {
      setObservationData(await fetchObservation({ place }));
    }

    const logData = {
      observationData: !!observationData,
      lastObservationDataAttempt: lastObservationDataAttempt,
      "Date.now() - lastObservationDataAttempt":
        lastObservationDataAttempt && Date.now() - lastObservationDataAttempt,
      OBSERVATION_REFRESH_INTERVAL: OBSERVATION_REFRESH_INTERVAL
    };

    if (
      !observationData ||
      (observationData &&
        lastObservationDataAttempt &&
        Date.now() - lastObservationDataAttempt > OBSERVATION_REFRESH_INTERVAL)
    ) {
      console.log("Need observation data refresh", logData);

      setLastObservationDataAttempt(Date.now());
      fetchData();
    } else {
      console.log("No need for observation data refresh", logData);
    }
    // eslint-disable-next-line
  }, [mark, place]);

  return (
    <Weather
      place={place}
      observationData={observationData}
      forecastData={forecastData}
    />
  );
}