import React from "react";
import { AppRouter } from "../app.router/app.router";
import { Header } from "../header/header";
import "./App.css";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  // { label: "Home", path: "/" },
  { label: "Login", path: "/login" },
];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </div>
  );
}

export default App;
