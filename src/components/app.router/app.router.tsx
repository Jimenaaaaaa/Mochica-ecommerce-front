import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import React from "react";
import { MenuOption } from "../app/App";

// Add later
// const Home = lazy(() => import("../../components/home/home"));
const Login = lazy(() => import("../../pages/login/login"));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path={"/login"} element={<Login></Login>}></Route>
      </Routes>
    </Suspense>
  );
}
