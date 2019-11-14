import React, { useState, useEffect } from "react";
import "./App.css";
import { DataLayer } from "./components/DataLayer";
import { LOCATION_UPDATE_INTERVAL } from "./config";

function App() {
  const [location, setLocation] = useState(undefined);

  function gotLocation(loc) {
    const newLocation = {
      lat: loc.coords.latitude.toFixed(2),
      lng: loc.coords.longitude.toFixed(2)
    };
    if (JSON.stringify(location) !== JSON.stringify(newLocation)) {
      console.log("Got new location", newLocation);
      setLocation(newLocation);
    } else {
      console.log("Got same location");
    }
  }

  function noLocation(err) {
    console.log(err);
  }

  function askLocation() {
    console.log("Asking for location");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(gotLocation, noLocation, {
        maximumAge: 30 * 60 * 1000
      });
    } else {
      console.log("No location support");
    }
  }

  const [mark, setMark] = useState(0);

  useEffect(() => {
    let timer = undefined;
    if (location !== undefined) {
      timer = setTimeout(() => setMark(m => m + 1), LOCATION_UPDATE_INTERVAL);
    }
    return () => clearTimeout(timer);
  }, [mark, location]);

  useEffect(() => {
    if (location !== undefined) {
      askLocation();
    }
    // eslint-disable-next-line
  }, [mark]);

  useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then(result => {
        console.log(result);
        if (result.state === "granted") {
          askLocation();
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <DataLayer location={location} onLocateClick={askLocation} />
    </div>
  );
}

export default App;
