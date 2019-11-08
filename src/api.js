import { INTERESTING_HOURS } from "./config";
import { xmlToJson } from "./utils";
import {
  startOfDay,
  getUnixTime,
  fromUnixTime,
  endOfDay,
  addHours
} from "date-fns";

const getInterestingTimestamps = ({ forecast }) => {
  const result = {
    // Date: {
    //   items: [
    //     {
    //       ts: Date,
    //       temp: Number,
    //     }
    //   ]
    // }
  };

  for (let index = 0; index < forecast.length; index++) {
    const element = forecast[index];
    if (INTERESTING_HOURS.indexOf(element["ts"].getHours()) !== -1) {
      const key = getUnixTime(startOfDay(element["ts"]));
      const e = (key in result && result[key]) || (result[key] = { items: [] });

      e["items"] || (e["items"] = []);
      e["items"].push({
        ts: element["ts"],
        temp: element["temp"]
      });
    }
  }

  // Create items array
  var items = Object.keys(result).map(function(key) {
    return [key, result[key]];
  });

  // Sort the array based on the second element
  items.sort(function(first, second) {
    return first[0] - second[0];
  });

  // [
  //   {
  //     startOfDay: Date,
  //     items: [
  //       ts: Date,
  //       temp: Number
  //     ]
  //   }
  // ]
  return items.map(a => ({
    startOfDay: fromUnixTime(a[0]),
    items: a[1].items
  }));
};

async function fetchXml({ url }) {
  const result = await fetch(url);
  return xmlToJson(
    new DOMParser().parseFromString(await result.text(), "text/xml")
  );
}

export async function fetchForecast({ place }) {
  const endTime = endOfDay(addHours(Date.now(), 2 * 24));

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
  const startTime = addHours(Date.now(), -1);

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
