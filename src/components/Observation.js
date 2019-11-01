import React, { useState, useEffect } from "react";
import { xmlToJson } from "../utils";
import { FORECAST_REFRESH_INTERVAL } from "../config";
import { TempTsPair } from "./TempTsPair";

export function Observation({ place }) {
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
      const startTime = new Date(Date.now());
      startTime.setTime(startTime.getTime() - 60 * 60 * 1000);

      const result = await fetch(
        `https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::observations::weather::simple&place=${place}&parameters=temperature&starttime=${startTime.toISOString()}`
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
              observation: {
                ts: new Date(
                  json["wfs:FeatureCollection"]["wfs:member"][
                    json["wfs:FeatureCollection"]["wfs:member"].length - 1
                  ]["BsWfs:BsWfsElement"]["BsWfs:Time"]
                ),
                temp: Number(
                  json["wfs:FeatureCollection"]["wfs:member"][
                    json["wfs:FeatureCollection"]["wfs:member"].length - 1
                  ]["BsWfs:BsWfsElement"]["BsWfs:ParameterValue"]
                )
              }
            }
          : {}
      );
    }
    fetchData();
  }, [mark, place]);

  return (
    <div>
      {data ? (
        <>
          <TempTsPair
            ts={data["observation"]["ts"]}
            temp={data["observation"]["temp"]}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
