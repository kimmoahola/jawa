import React from "react";
import "./App.css";
import { DataLayer } from "./components/DataLayer";

const PLACE = "Tampere";

function App() {
  return (
    <div className="App">
      <DataLayer place={PLACE} />
    </div>
  );
}

export default App;
