import { Outlet } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
