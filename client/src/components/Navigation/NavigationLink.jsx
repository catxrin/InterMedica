import { Link } from "react-router-dom";

export function NavigationLink({ link, label, pathname }) {
  return (
    <Link
      to={link}
      className={`rounded-md transition duration-300 px-3 py-2 text-sm font-medium ${
        pathname === link ? "text-black" : "text-gray-600 hover:text-black"
      }`}
    >
      {label}
    </Link>
  );
}
