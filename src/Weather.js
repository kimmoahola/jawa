import React, { useState, useEffect } from "react";
import formatDistance from "date-fns/formatDistance";
import { xmlToJson } from "./utils";

const FORECAST_REFRESH_INTERVAL = 30 * 60 * 1000;

const getInterestingTimestamps = forecast => {
  const interestingHours = [8, 16, 19];
  const result = [];

  for (let index = 0; index < forecast.length; index++) {
    const element = forecast[index];
    if (interestingHours.indexOf(element["ts"].getHours()) !== -1) {
      result.push(element);
    }
  }

  return result;
};

function Weather() {
  const [data, setData] = useState(undefined);
  const [mark, setMark] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setMark(m => m + 1),
      FORECAST_REFRESH_INTERVAL
    );
    return () => clearTimeout(timer);
  }, [mark]);

  useEffect(() => {
    async function fetchData() {
      const place = "Tampere";
      const endTime = new Date(Date.now());
      endTime.setTime(endTime.getTime() + 48 * 60 * 60 * 1000);

      const result = await fetch(
        `https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::forecast::harmonie::surface::point::simple&place=${place}&parameters=temperature&endtime=${endTime.toISOString()}`
      );
      const data = await result.text();
      const XmlNode = new DOMParser().parseFromString(data, "text/xml");
      const json = xmlToJson(XmlNode);

      setData(
        json["wfs:FeatureCollection"] &&
          json["wfs:FeatureCollection"]["wfs:member"]
          ? {
              ts: new Date(
                json["wfs:FeatureCollection"]["@attributes"]["timeStamp"]
              ),
              place: place,
              forecast: getInterestingTimestamps(
                json["wfs:FeatureCollection"]["wfs:member"].map(e => ({
                  ts: new Date(e["BsWfs:BsWfsElement"]["BsWfs:Time"]),
                  temp: Number(e["BsWfs:BsWfsElement"]["BsWfs:ParameterValue"])
                }))
              )
            }
          : { place: place }
      );
    }
    fetchData();
  }, [mark]);

  return (
    <div>
      {data ? (
        <>
          <p>Forecast of</p>
          <h1>{data["place"]}</h1>
          <div>
            {data["forecast"].map((e, index) => (
              <OneForecast key={index} ts={e["ts"]} temp={e["temp"]} />
            ))}
          </div>
          <LastUpdated ts={data["ts"]} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

function LastUpdated({ ts }) {
  const [mark, setMark] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setMark(m => m + 1), 30 * 1000);
    return () => clearTimeout(timer);
  }, [mark]);

  return <p>Last updated {formatDistance(new Date(), ts)} ago.</p>;
}

function OneForecast({ ts, temp }) {
  return (
    <div>
      {ts.toLocaleString("fi-FI")}: {temp}
    </div>
  );
}

export { Weather };
