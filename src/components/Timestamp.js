import React from "react";
import { isToday, isTomorrow, format } from "date-fns";

export function Timestamp({ ts }) {
  return (
    <>
      {format(ts, "EEEE - ")}
      {isToday(ts)
        ? "Tänään"
        : isTomorrow(ts)
        ? "Huomenna"
        : format(ts, "d.MM.")}
    </>
  );
}
