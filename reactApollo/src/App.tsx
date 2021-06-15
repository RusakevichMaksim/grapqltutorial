import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./component/card";
import Test from "./component/testGet";
const appStyle = {
  backgroundColor: "black",
  height: "100vh",
  width: "100%",
  color: "white",
  display: "flex",
  flexDirection: "column" as "column",
};

function App() {
  return (
    <div style={appStyle}>
      <Card />
      <Test />
    </div>
  );
}

export default App;
