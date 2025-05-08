import React, {useContext, useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {Link, useLocation, useNavigate} from "react-router";
import google from "../../assets/google.png";
import {AuthContext} from "../../provider/Context";
import Swal from "sweetalert2";
import {toast} from "react-toastify";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const {createUser, profileUpdate, loginWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate()
  const {state} = useLocation();
  const from = state?.from;
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    
    if (!/.{6,}/.test(password)) {
      return toast.error("Password Must be 6 characters or longer");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password must contain at least one lowercase letter");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one uppercase letter");
    }
    if (!terms) {
      return toast.error("Please Accept Terms & Conditions!");
    }
    createUser(email, password)
      .then(() => {
        profileUpdate(name, photo).then(() => {
          Swal.fire({
            title: " Successfully Registered!",
            icon: "success",
            draggable: true,
          });
          navigate(from?from:"/profile");
        });
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Registered Successfully",
          icon: "success",
          draggable: true,
        });
        navigate(from?from:"/");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  return (
    <div className="flex justify-center min-h-screen py-15 bg-base-300">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-primary mb-2 text-center mt-3">
          Create an account
        </h2>
        <p className="text-center mb-6 text-base-200">
          Join AppMaze and explore a world of innovative productivity, gaming,
          and health apps — all in one place.
        </p>
        <form onSubmit={handleRegister} className="space-y-2 pb-2">
          <div>
            <label className="block text-sm font-medium text-base-200 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-base-200 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              required
              className="w-full px-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
              placeholder="Your Photo URL"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-base-200 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div className="relative pb-2">
            <label className="block text-sm font-medium text-base-200 mb-1">
              Password
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

          <div className="mt-2 flex items-center gap-2">
            <input className="scale-125" type="checkbox" name="terms" id="" />
            <span className="text-base-200">Accept Our Terms & Conditons</span>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary cursor-pointer text-white font-medium py-2.5 rounded-2xl transition-colors mt-2"
          >
            Register
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-base-300"></div>
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-base-300"></div>
        </div>
        <div className="pb-2">
          <button onClick={handleLoginWithGoogle} className="w-full btn-primary btn-outline btn cursor-pointer  font-medium py-6 rounded-2xl transition-colors mt-4">
            <img className="w-6" src={google} alt="" />
            Login With Google
          </button>
        </div>
        <div className="mt-2 text-center text-sm text-gray-600 flex gap-2 justify-center">
          <p>Already have an account? </p>
          <Link
            to="/auth/login"
            className="text-secondary border-b border-transparent hover:border-secondary font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
