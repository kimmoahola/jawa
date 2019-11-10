import React from "react";
import { Temperature } from "./Temperature";
import { Precipitation } from "./Precipitation";
import { Wind } from "./Wind";
import { FeelsLike } from "./FeelsLike";

export function TempWindPrecip({ temperature, windspeedms, precipitation1h }) {
  return (
    <div>
      <Temperature temperature={temperature} />
      <FeelsLike temperature={temperature} windspeedms={windspeedms} />
      <Wind windspeedms={windspeedms} />
      <Precipitation precipitation1h={precipitation1h} />
    </div>
  );
}
