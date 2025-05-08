import React, {useContext} from "react";
import {FiMenu} from "react-icons/fi";
import {Link, NavLink} from "react-router";
import logo from "../../assets/logo.png";
import {RiMenu2Line} from "react-icons/ri";
import defaultImg from "../../assets/user.png";
import {CiLogout} from "react-icons/ci";
import {AuthContext} from "../../provider/Context";
import Swal from "sweetalert2";
import Tooltip from "../Tooltip/Tooltip";
const Navbar = () => {
  // const {user} = use()
  const {user, logoutUser} = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser().then(() => {
      Swal.fire({
        title: "Logout Successfully",
        icon: "success",
        draggable: true,
      });
    });
  };
  return (
    <div className="min-h-16 flex gap-0 w-11/12 mx-auto md:w-10/12 md:mx-auto items-center ">
      <div className="navbar-start">
        <div className="dropdown mr-2">
          <div tabIndex={0} role="button" className="cursor-pointer md:hidden">
            <RiMenu2Line size={28} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow py-4"
          >
            <li className="py-1">
              <NavLink
                className={({isActive}) =>
                  `text-lg font-semibold text-base-200 rounded-none hover:bg-transparent hover:text-secondary focus:bg-transparent active:bg-transparent transition-all duration-200 ease-in-out  ${
                    isActive
                      ? "text-secondary border-secondary border-b-2"
                      : "border-b-2  border-transparent"
                  }`
                }
                to="/"
              >
                Apps
              </NavLink>
            </li>
            <li className="py-1">
              <NavLink
                className={({isActive}) =>
                  `text-lg font-semibold text-base-200 rounded-none hover:bg-transparent hover:text-secondary focus:bg-transparent active:bg-transparent transition-all duration-200 ease-in-out  ${
                    isActive
                      ? "text-secondary border-secondary border-b-2"
                      : "border-b-2  border-transparent"
                  }`
                }
                to="/profile"
              >
                My Profile
              </NavLink>
            </li>
            <li className="py-1">
              <NavLink
                className={({isActive}) =>
                  `text-lg font-semibold text-base-200 rounded-none hover:bg-transparent hover:text-secondary focus:bg-transparent active:bg-transparent transition-all duration-200 ease-in-out  ${
                    isActive
                      ? "text-secondary border-secondary border-b-2"
                      : "border-b-2  border-transparent"
                  }`
                }
                to="/support"
              >
                Support
              </NavLink>
            </li>

            <li className="py-1 w-full">
              {user ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full btn btn-secondary px-2 text-lg font-semibold rounded-lg"
                >
                  <CiLogout size={20} />
                  Log Out
                </button>
              ) : (
                <Link
                  to="/auth/login"
                  className="btn btn-secondary btn-outline px-6 text-lg font-semibold rounded-lg w-full"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <a href="/" className=" flex items-center gap-3">
          <img className="w-9" src={logo} alt="" />{" "}
          <h2 className="text-2xl font-bold">AppMaze</h2>
        </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <li>
            <NavLink
              className={({isActive}) =>
                `text-lg font-semibold text-base-200 rounded-none hover:bg-transparent hover:text-secondary focus:bg-transparent active:bg-transparent transition-all duration-200 ease-in-out  ${
                  isActive
                    ? "text-secondary border-secondary border-b-2"
                    : "border-b-2  border-transparent"
                }`
              }
              to="/"
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) =>
                `text-lg font-semibold text-base-200 rounded-none hover:bg-transparent hover:text-secondary focus:bg-transparent active:bg-transparent transition-all duration-200 ease-in-out  ${
                  isActive
                    ? "text-secondary border-secondary border-b-2"
                    : "border-b-2  border-transparent"
                }`
              }
              to="/profile"
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) =>
                `text-lg font-semibold text-base-200 rounded-none hover:bg-transparent hover:text-secondary focus:bg-transparent active:bg-transparent transition-all duration-200 ease-in-out  ${
                  isActive
                    ? "text-secondary border-secondary border-b-2"
                    : "border-b-2  border-transparent"
                }`
              }
              to="/support"
            >
              Support
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-5 px-4 md:px-0">
        {/* Profile Image */}

        <Tooltip content={user?.displayName || "Guest"}>
          <Link to="/profile">
            <div className="avatar">
              <div
                className={`w-11 rounded-full  ring-secondary ring-offset-base-100 ring-offset-2 ${
                  user && "ring-2"
                }`}
              >
                <img src={user?.photoURL || defaultImg} alt="User Avatar" />
              </div>
            </div>
          </Link>
        </Tooltip>
        <li className="hidden md:block">
          {user ? (
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-secondary px-2 text-lg font-semibold rounded-lg"
            >
              <CiLogout size={20} />
              Log Out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-secondary btn-outline px-6 text-lg font-semibold rounded-lg"
            >
              Login
            </Link>
          )}
        </li>
      </div>
    </div>
  );
};

export default Navbar;
