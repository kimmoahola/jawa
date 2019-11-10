import React from "react";
import { isToday, isTomorrow, format } from "date-fns";

function getDayOfWeek(date) {
  var dayOfWeek = date.getDay();
  return [
    "Sunnuntai",
    "Maanantai",
    "Tiistai",
    "Keskiviikko",
    "Torstai",
    "Perjantai",
    "Lauantai"
  ][dayOfWeek];
}

export function Date({ ts }) {
  return (
    <>
      {getDayOfWeek(ts)}
      {" - "}
      {isToday(ts)
        ? "Tänään"
        : isTomorrow(ts)
        ? "Huomenna"
        : format(ts, "d.MM.")}
    </>
  );
}
