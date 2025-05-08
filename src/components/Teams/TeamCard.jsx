import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const TeamCard = ({team}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-6 text-center border border-base-300">
      <img
        src={team.image}
        alt={team.name}
        className="w-30 h-30 mx-auto rounded-full object-cover border-4 border-secondary"
      />
      <h3 className="mt-4 text-xl font-semibold text-primary">{team.name}</h3>
      <p className="text-sm text-base-200">{team.department}</p>
      <div className="flex justify-center gap-3 mt-4">
        <a
          href="https://facebook.com"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400 text-white hover:opacity-80 transition"
        >
          <FaFacebookF size={16} />
        </a>

        <a
          href="https://github.com"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400 text-white hover:opacity-80 transition"
        >
          <FaGithub size={16} />
        </a>
        <a
          href="https://linkedin.com"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-400 text-white hover:opacity-80 transition"
        >
          <FaLinkedinIn size={16} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
