import React from "react";
import Search from "./Search";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <h4>
        This site was coded by{" "}
        <a href="https://gleaming-dragon-c67369.netlify.app/">
          Beatrice Rodehav
        </a>{" "}
        and is open-source at{" "}
        <a href="https://github.com/Kloverfield/weather-react-app">Github</a>
      </h4>
    </div>
  );
}
