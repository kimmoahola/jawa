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
    // console.log(previousValue, currentValue);
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

function valueWithHighestKey({ obj }) {
  const arr = makeArraySortedByKey(obj);
  const lastItem = arr[arr.length - 1];
  return {
    key: lastItem && lastItem[0],
    value: lastItem && lastItem[1]
  };
}

async function fetchXml({ url }) {
  const result = await fetch(url);
  return xmlToJson(
    new DOMParser().parseFromString(await result.text(), "text/xml")
  );
}

export async function fetchForecast({ place }) {
  const endTime = endOfDay(addHours(Date.now(), 2 * 24));

  const responseData = await fetchXml({
    url: `https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::forecast::harmonie::surface::point::simple&place=${place}&parameters=temperature,windspeedms,precipitation1h&endtime=${endTime.toISOString()}`
  });

  return convertToForecastData({
    tsByValuesObject: timestampsToValuesObject({ responseData })
  });
}

export async function fetchObservation({ place }) {
  const startTime = addHours(Date.now(), -1);

  const responseData = await fetchXml({
    url: `https://opendata.fmi.fi/wfs?request=getFeature&storedquery_id=fmi::observations::weather::simple&place=${place}&parameters=temperature,windspeedms,precipitation1h&starttime=${startTime.toISOString()}`
  });

  const { key: ts, value: observations } = valueWithHighestKey({
    obj: timestampsToValuesObject({ responseData })
  });

  return (
    ts &&
    observations && {
      ts: fromUnixTime(ts),
      ...observations
    }
  );
}
