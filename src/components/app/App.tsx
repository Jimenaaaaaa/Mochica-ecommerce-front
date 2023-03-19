import React from "react";
import { AppRouter } from "../app.router/app.router";
import { Header } from "../header/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
