import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MenuDrawer from "../components/MenuDrawer";
import UserDrawer from "../components/UserDrawer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MenuDrawer />
      <UserDrawer />
      <Outlet />
    </>
  );
};

export default Layout;
