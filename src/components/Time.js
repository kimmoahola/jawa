import React from "react";
import { format } from "date-fns";

export function Time({ ts, includeMinutes } = { includeMinutes: false }) {
  const formatString = includeMinutes ? "HH:mm" : "H";

  return <div className="time">klo {format(ts, formatString)}</div>;
}
