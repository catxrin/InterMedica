import { Outlet } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex grow justify-between flex-col overflow-auto">
      <Outlet />
      <Footer />
      </div>
    </div>
  );
}

export default Layout;
