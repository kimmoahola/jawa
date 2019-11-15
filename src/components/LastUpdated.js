import React, { useState, useEffect } from "react";
import formatDistance from "date-fns/formatDistance";
import { fi } from "date-fns/locale";

export function LastUpdated({ ts }) {
  const [mark, setMark] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setMark(m => m + 1), 30 * 1000);
    return () => clearTimeout(timer);
  }, [mark]);

  if (!ts) {
  }

  return (
    <p>
      {ts ? (
        <>
          Päivitetty{" "}
          {formatDistance(new Date(), ts, {
            locale: fi
          })}{" "}
          sitten.
        </>
      ) : (
        "Ei päivitetty"
      )}
    </p>
  );
}
