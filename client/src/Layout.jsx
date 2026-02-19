import { Outlet } from "react-router-dom";
import { AppHeader } from "./components/Navigation/Header";

function Layout() {
  return (
    <div className="flex flex-col">
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default Layout;
