import React, {useContext, useState} from "react";
import {AuthContext} from "../../provider/Context";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {toast} from "react-toastify";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const {changePassword} = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const handleChangePassword = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (!/.{6,}/.test(password)) {
      return toast.error("Password Must be 6 characters or longer");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password must contain at least one lowercase letter");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one uppercase letter");
    }

    if (password !== confirmPassword) {
      return toast.error("New Password and Confirm Password must be same");
    }
    changePassword(password)
      .then(() => {
        Swal.fire({
          title: " Password Changed",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
      e.target.reset()
  };
  return (
    <div className="p-5 ">
      <h1 className="text-xl font-bold pb-2">Change Your Password</h1>
      <form className="space-y-4" onSubmit={handleChangePassword}>
        <div className="relative pb-2">
          <label className="block text-sm font-medium text-base-200 mb-1">
            New Password
          </label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            className="w-full px-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
            placeholder="••••••••"
          />
          <button
            className="absolute right-5 text-xl text-base-200 top-8 cursor-pointer"
            type="button"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="relative pb-2">
          <label className="block text-sm font-medium text-base-200 mb-1">
            Confirm Password
          </label>
          <input
            type={showPass ? "text" : "password"}
            name="confirmPassword"
            className="w-full px-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
            placeholder="••••••••"
          />
          <button
            className="absolute right-5 text-xl text-base-200 top-8 cursor-pointer"
            type="button"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button
          className="btn btn-secondary hover:bg-secondary hover:text-white px-6 text-lg font-semibold rounded-lg"
          type="submit"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
