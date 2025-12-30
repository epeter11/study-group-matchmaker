import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          StudyMatch
        </Link>

        <div className="flex gap-6">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/matches"
            className={({ isActive }) =>
              isActive
                ? "font-medium text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Matches
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
