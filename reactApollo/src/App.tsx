import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./component/card";
const appStyle = {
  backgroundColor: "black",
  height: "100vh",
  width: "100%",
  color: "white",
  display: "flex",
};

function App() {
  return (
    <div style={appStyle}>
      <Card />
    </div>
  );
}

export default App;
