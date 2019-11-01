import React from "react";

export function TempTsPair({ ts, temp }) {
  return (
    <div>
      {ts.toLocaleString("fi-FI")}: {temp}
    </div>
  );
}
