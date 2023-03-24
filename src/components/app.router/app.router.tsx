import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Add from "../../pages/add/add";
import ArtistsFiltered from "../../pages/artists/artists.filtered/artists.fitlered";

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
const Edit = lazy(() => import("../../pages/edit/edit"));

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"/products"} element={<Products></Products>}></Route>
        <Route path={"/artists"} element={<Artists></Artists>}></Route>
        <Route
          path={"/artists/:author"}
          element={<ArtistsFiltered></ArtistsFiltered>}
        ></Route>
        <Route path={"/cart"} element={<Cart></Cart>}></Route>
        <Route path={"/about"} element={<About></About>}></Route>
        <Route path={"/profile"} element={<Profile></Profile>}></Route>
        <Route path={"/details/:id"} element={<Details></Details>}></Route>
        <Route path={"/add"} element={<Add></Add>}></Route>
        <Route path={"/edit/:id"} element={<Edit></Edit>}></Route>
      </Routes>
    </Suspense>
  );
}
