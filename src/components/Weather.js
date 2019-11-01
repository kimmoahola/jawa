import React, { useState, useEffect } from "react";
import formatDistance from "date-fns/formatDistance";
import { Observation } from "./Observation";
import { xmlToJson } from "../utils";
import { FORECAST_REFRESH_INTERVAL } from "../config";
import { TempTsPair } from "./TempTsPair";

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

function Weather({ place }) {
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
              forecast: getInterestingTimestamps(
                json["wfs:FeatureCollection"]["wfs:member"].map(e => ({
                  ts: new Date(e["BsWfs:BsWfsElement"]["BsWfs:Time"]),
                  temp: Number(e["BsWfs:BsWfsElement"]["BsWfs:ParameterValue"])
                }))
              )
            }
          : {}
      );
    }
    fetchData();
  }, [mark, place]);

  return (
    <div>
      <p>Forecast of</p>
      <h1>{place}</h1>
      <div>
        <Observation place={place} />
        {data ? (
          <>
            <div>
              {data["forecast"].map((e, index) => (
                <TempTsPair key={index} ts={e["ts"]} temp={e["temp"]} />
              ))}
            </div>
            <LastUpdated ts={data["ts"]} />
          </>
        ) : (
          ""
        )}
      </div>
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

export { Weather };
