import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MenuDrawer from "../components/MenuDrawer";
import UserDrawer from "../components/UserDrawer";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MenuDrawer />
      <UserDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
