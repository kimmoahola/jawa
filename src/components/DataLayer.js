import React, { useState, useEffect } from "react";
import { fetchForecast } from "../api";
import { FORECAST_REFRESH_INTERVAL, OLD_DATA_CHECK_INTERVAL } from "../config";
import { Weather } from "./Weather";

export function DataLayer({ location, onLocateClick }) {
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

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await fetchForecast({ location });
        setForecastData(result);
        setLastForecastDataAttempt(Date.now());
      } catch (error) {
        console.error(error);
        setIsError(true);
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
      {isError && "Virhe haettaessa viimeisimpiä ennusteita."}
      <Weather
        location={location}
        forecastData={forecastData}
        onLocateClick={onLocateClick}
      />
    </>
  );
}
