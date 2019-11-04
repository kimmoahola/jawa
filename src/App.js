import React from "react";
import "./App.css";
import { DataLayer } from "./components/DataLayer";

const PLACE = "Tampere";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataLayer place={PLACE} />
      </header>
    </div>
  );
}

export default App;
