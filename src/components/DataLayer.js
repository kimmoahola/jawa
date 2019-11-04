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
  const [observationData, setObservationData] = useState(undefined);
  const [mark, setMark] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setMark(m => m + 1), DATA_CHECK_INTERVAL);
    return () => clearTimeout(timer);
  }, [mark]);

  useEffect(() => {
    async function fetchData() {
      setForecastData(await fetchForecast({ place }));
    }

    if (
      !forecastData ||
      (forecastData &&
        forecastData["ts"] &&
        Date.now() - forecastData["ts"] > FORECAST_REFRESH_INTERVAL)
    ) {
      fetchData();
    }
  }, [mark, place, forecastData]);

  useEffect(() => {
    async function fetchData() {
      setObservationData(await fetchObservation({ place }));
    }

    if (
      !observationData ||
      (observationData &&
        observationData["ts"] &&
        Date.now() - observationData["ts"] > OBSERVATION_REFRESH_INTERVAL)
    ) {
      fetchData();
    }
  }, [mark, place, observationData]);

  return (
    <Weather
      place={place}
      observationData={observationData}
      forecastData={forecastData}
    />
  );
}
