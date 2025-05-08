import React, {useContext} from "react";
import {AuthContext} from "../../provider/Context";
import {Navigate, NavLink, Outlet, useNavigate} from "react-router";
import Swal from "sweetalert2";
import defaultImg from "../../assets/user.png";
import {FaClipboardUser} from "react-icons/fa6";
import {FaKey} from "react-icons/fa";
import {CiLogout} from "react-icons/ci";
import { Helmet } from "react-helmet-async";
const Profile = () => {
  const {user, logoutUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    logoutUser().then(() => {
      Swal.fire({
        title: "Logout Successfully",
        icon: "success",
        draggable: true,
      });
      navigate("/login");
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AppMaze - Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-5 lg:p-8 ">
        <div className="flex gap-6 flex-col justify-center items-center md:col-span-3 bg-base-100 p-4 px-6 border border-base-300 rounded-2xl shadow-lg ">
          <div className="avatar max-w-30">
            <div
              className={`ring-secondary ring-offset-base-100 w-32 mx-auto rounded-full  ring-offset-2 ${
                user && "ring-3"
              }`}
            >
              <img className="w-full object-cover" src={user?.photoURL || defaultImg} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-0 border border-secondary w-full">
            <NavLink
              className={({isActive}) =>
                `w-full  py-4 px-6 border-secondary text-lg font-medium cursor-pointer flex gap-2 items-center ${
                  isActive
                    ? "bg-secondary  text-white"
                    : "bg-transparent text-secondary"
                }`
              }
              to="/profile"
            >
              <FaClipboardUser />
              Profile Details
            </NavLink>
            <NavLink
              className={({isActive}) =>
                `w-full  py-4 px-6 border-secondary text-lg font-medium cursor-pointer flex gap-2 items-center ${
                  isActive
                    ? "bg-secondary  text-white"
                    : "bg-transparent text-secondary"
                }`
              }
              to="changePassword"
            >
              <FaKey />
              Change Password
            </NavLink>
            <button
              onClick={handleLogoutUser}
              className="w-full py-4 px-6 border-secondary text-lg font-medium cursor-pointer text-secondary border hover:bg-secondary hover:text-white flex items-center gap-2"
            >
              <CiLogout size={25} />
              Logout
            </button>
          </div>
        </div>
        <div className="md:col-span-9 border border-base-300 rounded-2xl shadow-lg">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Profile;
