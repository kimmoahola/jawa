import { INTERESTING_HOURS } from "./config";
import { xmlToJson } from "./utils";

const getInterestingTimestamps = ({ forecast }) => {
  const result = [];

  for (let index = 0; index < forecast.length; index++) {
    const element = forecast[index];
    if (INTERESTING_HOURS.indexOf(element["ts"].getHours()) !== -1) {
      result.push(element);
    }
  }

  return result;
};

async function fetchXml({ url }) {
  const result = await fetch(url);
  return xmlToJson(
    new DOMParser().parseFromString(await result.text(), "text/xml")
  );
}

export async function fetchForecast({ place }) {
  const endTime = new Date(Date.now());
  endTime.setTime(endTime.getTime() + 48 * 60 * 60 * 1000);

  const json = await fetchXml({
    url: `https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::forecast::harmonie::surface::point::simple&place=${place}&parameters=temperature&endtime=${endTime.toISOString()}`
  });

  return json["wfs:FeatureCollection"] &&
    json["wfs:FeatureCollection"]["wfs:member"]
    ? {
        ts: new Date(json["wfs:FeatureCollection"]["@attributes"]["timeStamp"]),
        forecast: getInterestingTimestamps({
          forecast: json["wfs:FeatureCollection"]["wfs:member"].map(e => ({
            ts: new Date(e["BsWfs:BsWfsElement"]["BsWfs:Time"]),
            temp: Number(e["BsWfs:BsWfsElement"]["BsWfs:ParameterValue"])
          }))
        })
      }
    : {};
}

export async function fetchObservation({ place }) {
  const startTime = new Date(Date.now());
  startTime.setTime(startTime.getTime() - 60 * 60 * 1000);

  const json = await fetchXml({
    url: `https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::observations::weather::simple&place=${place}&parameters=temperature&starttime=${startTime.toISOString()}`
  });

  return json["wfs:FeatureCollection"] &&
    json["wfs:FeatureCollection"]["wfs:member"]
    ? {
        ts: new Date(json["wfs:FeatureCollection"]["@attributes"]["timeStamp"]),
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
    : {};
}
