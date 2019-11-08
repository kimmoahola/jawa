import React from "react";
import { TempTsPair } from "./TempTsPair";
import { Timestamp } from "./Timestamp";
import { INTERESTING_HOURS } from "../config";

export function Forecast({ data }) {
  return (
    <div>
      {data ? (
        <>
          <div>
            {data["forecast"].map((d, index1) => (
              <div key={index1}>
                <div className="forecast-date">
                  <Timestamp ts={d["startOfDay"]} />
                </div>
                <div className="weather-container">
                  {[
                    ...Array(
                      INTERESTING_HOURS.length - d["items"].length
                    ).keys()
                  ].map((i, index2) => (
                    <div
                      key={index2}
                      className="weather-item weather-item-empty"
                    ></div>
                  ))}
                  {d["items"].map((i, index2) => (
                    <div key={index2} className="weather-item">
                      <TempTsPair ts={i["ts"]} temp={i["temp"]} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
