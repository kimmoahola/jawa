import React, { useState, useEffect } from "react";
import { fetchForecast } from "../api";
import { FORECAST_REFRESH_INTERVAL, OLD_DATA_CHECK_INTERVAL } from "../config";
import { Weather } from "./Weather";
import { StatusMessage } from "./StatusMessage";

export function DataLayer({ isLocating, location, onLocateClick }) {
  const [forecastData, setForecastData] = useState(undefined);
  const [lastForecastDataAttempt, setLastForecastDataAttempt] = useState(
    undefined
  );
  const [lastLocation, setLastLocation] = useState(undefined);
  const [mark, setMark] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setMark(m => m + 1),
      OLD_DATA_CHECK_INTERVAL
    );
    return () => clearTimeout(timer);
  }, [mark]);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await fetchForecast({ location });
        setForecastData(result);
        setLastForecastDataAttempt(Date.now());
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    if (
      !forecastData ||
      JSON.stringify(lastLocation) !== JSON.stringify(location) ||
      (forecastData &&
        lastForecastDataAttempt &&
        Date.now() - lastForecastDataAttempt > FORECAST_REFRESH_INTERVAL)
    ) {
      console.log("Need forecast data refresh");

      fetchData();
      setLastLocation(location);
    } else {
      console.log("No need for forecast data refresh");
    }
    // eslint-disable-next-line
  }, [mark, location]);

  return (
    <>
      <StatusMessage
        isLocating={isLocating}
        location={location}
        isLoading={isLoading}
        isError={isError}
      />
      <Weather
        location={location}
        forecastData={forecastData}
        onLocateClick={onLocateClick}
      />
    </>
  );
}
