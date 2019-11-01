import React from "react";
import "./App.css";
import { Weather } from "./components/Weather";

const PLACE = "Tampere";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather place={PLACE} />
      </header>
    </div>
  );
}

export default App;
