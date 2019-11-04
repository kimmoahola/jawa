import React from "react";
import { TempTsPair } from "./TempTsPair";
import { LastUpdated } from "./LastUpdated";

export function Forecast({ data }) {
  return (
    <div>
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
  );
}
