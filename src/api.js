import { xmlToJson } from "./utils";
import {
  startOfDay,
  getUnixTime,
  fromUnixTime,
  endOfDay,
  addHours,
  startOfHour
} from "date-fns";

function makeArraySortedByKey(obj) {
  return Object.keys(obj)
    .map(function(key) {
      return [key, obj[key]];
    })
    .sort(function(first, second) {
      return first[0] - second[0];
    });
}

function convertToForecastData({ tsByValuesObject }) {
  return makeArraySortedByKey(
    Object.keys(tsByValuesObject).reduce((previousValue, key) => {
      const value = tsByValuesObject[key];

      const ts = fromUnixTime(key);
      const tsStartOfHour = startOfHour(ts);

      // getUnixTime so that the timestamp can be put to object as a key
      const tsStartOfHourUnix = getUnixTime(tsStartOfHour);
      const startOfDayUnix = getUnixTime(startOfDay(ts));

      previousValue[startOfDayUnix] = {
        ...previousValue[startOfDayUnix],
        [tsStartOfHourUnix]: {
          ...(previousValue[startOfDayUnix]
            ? previousValue[startOfDayUnix][tsStartOfHourUnix]
            : {}),
          ...value
        }
      };

      return previousValue;
    }, {})
  ).map(g => ({
    startOfDay: fromUnixTime(g[0]),
    items: makeArraySortedByKey(g[1]).map(h => ({
      ts: fromUnixTime(h[0]),
      ...h[1]
    }))
  }));
}

function timestampsToValuesObject({ responseData }) {
  return (
    (responseData &&
      responseData["wfs:FeatureCollection"] &&
      responseData["wfs:FeatureCollection"]["wfs:member"]) ||
    []
  ).reduce((previousValue, currentValue) => {
    const item = currentValue["BsWfs:BsWfsElement"];

    const ts = new Date(item["BsWfs:Time"]);

    // getUnixTime so that the timestamp can be put to object as a key
    const tsUnix = getUnixTime(ts);

    const name = item["BsWfs:ParameterName"];
    const value = Number(item["BsWfs:ParameterValue"]);

    previousValue[tsUnix] = {
      ...previousValue[tsUnix],
      ...{ [name]: value }
    };

    return previousValue;
  }, {});
}

async function fetchXml({ url }) {
  const result = await fetch(url);
  return xmlToJson(
    new DOMParser().parseFromString(await result.text(), "text/xml")
  );
}

export async function fetchForecast({ location }) {
  if (!location) {
    return undefined;
  }
  const startTime = addHours(new Date(), -1).toISOString();
  const endTime = endOfDay(addHours(new Date(), 3 * 24)).toISOString();
  const latlon = `${location.lat},${location.lng}`;

  const queryParams = [
    "request=getFeature",
    "storedquery_id=fmi::forecast::harmonie::surface::point::simple",
    "parameters=temperature,windspeedms,precipitation1h",
    `latlon=${latlon}`,
    `starttime=${startTime}`,
    `endtime=${endTime}`
  ].join("&");

  const responseData = await fetchXml({
    url: "https://opendata.fmi.fi/wfs?" + queryParams
  });

  const fetchTs =
    responseData &&
    responseData["wfs:FeatureCollection"] &&
    new Date(responseData["wfs:FeatureCollection"]["@attributes"]["timeStamp"]);

  return {
    fetchTs,
    items: convertToForecastData({
      tsByValuesObject: timestampsToValuesObject({ responseData })
    })
  };
}
