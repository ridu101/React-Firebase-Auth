import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Signed Out!",
          text: "You have successfully signed out.",
          confirmButtonText: "OK",
          confirmButtonColor: "#2563eb",
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Sign Out Failed",
          text: error.message,
          confirmButtonText: "Try Again",
          confirmButtonColor: "#dc2626",
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {!user && (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>

          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}

      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>

          <li>
            <NavLink to="/order">Orders</NavLink>
          </li>

          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100/95 backdrop-blur-md shadow-md sticky top-0 z-50 px-4 lg:px-8">
      {/* Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link
          to="/"
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          🔥 React Firebase Auth
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
      </div>

      {/* User Section */}
      <div className="navbar-end gap-3">
        {user ? (
          <>
            {/* Profile Image */}
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-9 md:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="bg-primary text-primary-content w-full h-full flex items-center justify-center">
                      <span className="font-bold">
                        {user.email?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <span className="hidden xl:block text-sm font-medium max-w-40 truncate">
                {user.displayName || user.email}
              </span>
            </div>

            {/* Sign Out */}
            <button
              onClick={handleSignOut}
              className="btn btn-error btn-sm text-white"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm">
            Login Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
