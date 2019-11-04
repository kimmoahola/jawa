import React from "react";
import { TempTsPair } from "./TempTsPair";
import { LastUpdated } from "./LastUpdated";

export function Observation({ data }) {
  return (
    <div>
      {data ? (
        <>
          <TempTsPair
            ts={data["observation"]["ts"]}
            temp={data["observation"]["temp"]}
          />
          <LastUpdated ts={data["ts"]} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
