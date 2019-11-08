import React from "react";
import { Temperature } from "./Temperature";
import { format } from "date-fns";

export function TempTsPair(
  { ts, temp, includeMinutes } = { includeMinutes: false }
) {
  return (
    <div>
      <span className="time">
        klo {format(ts, "HH" + (includeMinutes ? ":mm" : ""))}
      </span>
      {isNaN(temp) ? "N/A" : <Temperature temp={Math.round(temp)} />}
    </div>
  );
}
