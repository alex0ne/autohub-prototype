import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import { LandingPage } from "./components/LandingPage";

import "antd/dist/antd.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
