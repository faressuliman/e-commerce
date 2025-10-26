import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MenuDrawer from "../components/MenuDrawer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MenuDrawer />
      <Outlet />
    </>
  );
};

export default Layout;
