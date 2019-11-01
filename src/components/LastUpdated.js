import React, { useState, useEffect } from "react";
import formatDistance from "date-fns/formatDistance";

export function LastUpdated({ ts }) {
  const [mark, setMark] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setMark(m => m + 1), 30 * 1000);
    return () => clearTimeout(timer);
  }, [mark]);

  return <p>Updated {formatDistance(new Date(), ts)} ago.</p>;
}
