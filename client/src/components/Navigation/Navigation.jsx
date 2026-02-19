import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Menu, X } from "lucide-react";
import { NavigationLink } from "./NavigationLink";

import { Logo } from "../Logo";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 bg-green-50 font-sans shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          <NavigationLink link="/" label="Dashboard" pathname={pathname} />
          <NavigationLink
            link="/checker"
            label="Interaction Checker"
            pathname={pathname}
          />
          <NavigationLink
            link="/database"
            label="Drug Database"
            pathname={pathname}
          />
          <NavigationLink link="/profile" label="Profile" pathname={pathname} />
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => navigate("/auth/login")}
            className="button-secondary text-sm"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/auth/register")}
            className="button-primary text-sm"
          >
            Get Started
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden cursor-pointer"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <NavigationLink link="/" label="Dashboard" pathname={pathname} />
            <NavigationLink
              link="/checker"
              label="Interaction Checker"
              pathname={pathname}
            />
            <NavigationLink
              link="/database"
              label="Drug Database"
              pathname={pathname}
            />
            <NavigationLink
              link="/profile"
              label="Profile"
              pathname={pathname}
            />
          </nav>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <button
              onClick={() => navigate("/auth/login")}
              className="button-secondary w-full"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/auth/register")}
              className="button-primary w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
