import React from "react";

function getMessage({ isLocating, location, isLoading, isError }) {
  if (isLocating) {
    return "Paikannetaan...";
  } else if (!location) {
    return "Sijaintitieto tarvitaan ennusteen hakemiseen.";
  } else if (isLoading) {
    return "Tietoja haetaan...";
  } else if (isError) {
    return "Virhe tietojen haussa.";
  }
  return undefined;
}

export function StatusMessage({ isLocating, location, isLoading, isError }) {
  const message = getMessage({ isLocating, location, isLoading, isError });
  if (message) {
    return <div className="status-message">{message}</div>;
  } else {
    return null;
  }
}
