import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar lg:px-4  backdrop-blur-xl bg-white/30 z-50 fixed">
      <div className="navbar-start">
        <Link to="/" className=" text-xl">
          COFFEE_BOOK
        </Link>
      </div>
      <div className="navbar-end ">
        <div className="dropdown navbar-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/coffees"
            >
              Coffees
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/coffees"
            >
              Coffees
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;