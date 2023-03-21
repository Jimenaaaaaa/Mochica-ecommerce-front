import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

// Add later
// const Home = lazy(() => import("../../components/home/home"));
const Login = lazy(() => import("../../pages/login/login"));
const Register = lazy(() => import("../../pages/register/register"));
const Products = lazy(() => import("../../pages/products/products"));
const Cart = lazy(() => import("../../pages/cart/cart"));
const Artists = lazy(() => import("../../pages/artists/artists"));
const About = lazy(() => import("../../pages/about/about"));
const Profile = lazy(() => import("../../pages/profile/profile"));
const Details = lazy(() => import("../../pages/details/details"));

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"/products"} element={<Products></Products>}></Route>
        <Route path={"/artists"} element={<Artists></Artists>}></Route>
        <Route path={"/cart"} element={<Cart></Cart>}></Route>
        <Route path={"/about"} element={<About></About>}></Route>
        <Route path={"/profile"} element={<Profile></Profile>}></Route>
        <Route path={"/details/:id"} element={<Details></Details>}></Route>
      </Routes>
    </Suspense>
  );
}
