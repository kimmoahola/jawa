import React, { useState, useEffect } from "react";
import { xmlToJson } from "./utils";

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
  }, []);

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
        </>
      ) : (
        ""
      )}
    </div>
  );
}

function OneForecast({ ts, temp }) {
  return (
    <div>
      {ts.toLocaleString("fi-FI")}: {temp}
    </div>
  );
}

export { Weather };
