import { Outlet } from "react-router-dom";
import Nav from "./Nav/Nav";
import Footer from "./Nav/Footer";

export default function Layout() {

  return(
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}