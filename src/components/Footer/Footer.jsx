import React from "react";
import logo from "../../assets/logo.png";
import {FaFacebook, FaGithub, FaInstagram} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer sm:footer-horizontal  text-white  md:w-11/12 lg:w-10/12 mx-auto px-4 py-10">
        <nav>
          <a href="/" className=" flex items-center gap-3">
            <img className="w-9" src={logo} alt="" />{" "}
            <h2 className="text-2xl font-bold">AppMaze</h2>
          </a>
          <p className="leading-6 font-semibold">
            Find the Right App—Fast, Easy, <br /> Tailored
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Important Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Developer Resources</a>
          <a className="link link-hover">Social Media</a>
        </nav>
        <nav className="space-y-4">
          <h6 className="footer-title">Social</h6>
          <div className="flex gap-4">
            <a target="_blank" href="https://www.facebook.com">
              <FaFacebook size={28}/>
            </a>
            <a target="_blank" href="https://www.facebook.com">
              <FaInstagram size={28}/>
            </a>
            <a target="_blank" href="https://www.facebook.com">
              <FaGithub size={28}/>
            </a>
          </div>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </nav>
      </div>
      <div className="text-white text-center py-4">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by AppMaze
        </p>
      </div>
    </>
  );
};

export default Footer;
