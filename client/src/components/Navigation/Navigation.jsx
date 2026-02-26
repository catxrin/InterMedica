import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu, X } from "lucide-react";
import { NavigationLink } from "./NavigationLink";

import { Logo } from "../Logo";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { pathname } = useLocation();

  const navLinks = [
    { link: "/", label: "Dashboard" },
    { link: "/checker", label: "Interaction Checker" },
    { link: "/database", label: "Drug Database" },
    { link: "/profile", label: "Profile" },
  ];

  return (
    <header className="sticky top-0 bg-green-50 font-sans shadow-sm z-50">
      <div className="mx-auto relative flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <NavigationLink
              key={item.link}
              link={item.link}
              label={item.label}
              pathname={pathname}
            />
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/auth/login" className="button-secondary text-sm">
            Sign In
          </Link>
          <Link to="/auth/register" className="button-primary text-sm">
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden cursor-pointer"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="px-4 absolute bg-green-50 shadow-[0_1px_0_0] shadow-gray-200 w-full py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <NavigationLink
                key={item.link}
                link={item.link}
                label={item.label}
                pathname={pathname}
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link onClick={() => setMobileOpen(false)} to="/auth/login" className="button-secondary w-full">
              Sign In
            </Link>
            <Link onClick={() => setMobileOpen(false)} to="/auth/register" className="button-primary w-full">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
