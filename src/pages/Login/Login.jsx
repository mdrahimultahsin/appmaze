import React, {useContext, useRef, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router";
import google from "../../assets/google.png";
import logo from "../../assets/logo.png";
import {AuthContext} from "../../provider/Context";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import loginBg from "../../assets/login_bg.png";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const {loginUser, loginWithGoogle, forgetPassword} = useContext(AuthContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const {state} = useLocation();
  const from = state?.from;
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Logged in successfully!",
          icon: "success",
          draggable: true,
        });
        navigate(from ? from : "/");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Login Successfully",
          icon: "success",
          draggable: true,
        });
        navigate(from ? from : "/");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  const handleForgetPasword = () => {
    const email = emailRef.current.value;
    forgetPassword(email).then(() => {
      Swal.fire({
        title: "A mail sent in your email for reset password",
        icon: "success",
        draggable: true,
      });
    });
  };
  return (
    <div className="min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center md:gap-5 bg-base-300  rounded-2xl py-15 md:py-15 px-6">
      <div className="">
        <img className="hidden lg:block h-130 " src={loginBg} alt="" />
      </div>
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <img className="w-10 mx-auto" src={logo} alt="" />
        <h2 className="text-2xl font-bold text-primary mb-2 text-center mt-3">
          Welcome back to AppMaze
        </h2>
        <p className="text-center mb-6 text-base-200">
          Explore and manage the best apps across productivity, gaming, and
          health — all in one place
        </p>
        <form onSubmit={handleLogin} className="space-y-2 pb-2">
          <div>
            <label className="block text-sm font-medium text-base-200 mb-1">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-base-200 mb-1">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              required
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

          <div className="flex items-center justify-between">
            <span></span>
            <button
              type="button"
              onClick={handleForgetPasword}
              className="text-sm text-secondary hover:text-secondary cursor-pointer hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary cursor-pointer text-white font-medium py-2.5 rounded-2xl transition-colors mt-2"
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-base-300"></div>
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-base-300"></div>
        </div>
        <div className="pb-2">
          <button
            onClick={handleLoginWithGoogle}
            className="w-full btn-primary btn-outline btn cursor-pointer  font-medium py-6 rounded-2xl transition-colors mt-4"
          >
            <img className="w-6" src={google} alt="" />
            Login With Google
          </button>
        </div>
        <div className="mt-2 text-center text-sm text-gray-600 flex gap-2 justify-center">
          <p>Don't have an account? </p>
          <Link
            to="/auth/register"
            className="text-secondary border-b border-transparent hover:border-secondary font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
