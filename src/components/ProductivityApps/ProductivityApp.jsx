import React from "react";
import {FaDownload, FaStar} from "react-icons/fa";
import {Link} from "react-router";

const ProductivityApp = ({app}) => {
  const {id, thumbnail, name, downloads, rating, category} = app;
  return (
    <Link to={`/appdetails/${id}`}>
      <div className="rounded-2xl shadow-lg cursor-pointer">
        {/* Image */}
        <div>
          <img
            className="w-full h-55 object-cover rounded-t-2xl"
            src={thumbnail}
            alt=""
          />
        </div>
        {/* Contents */}
        <div className="px-4 pb-4">
          <div className="py-4 border-b-2 border-base-300 ">
            <h2 className="font-semibold text-2xl">{name}</h2>
            <p className="text-base-200 text-sm font-medium">{category}</p>
          </div>
          <div className="py-4 flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <span className="text-primary">{rating}</span>
            </div>
            <div className="flex gap-1 items-center text-base-200">
              <div className="p-2 bg-secondary rounded-full text-white">
                <FaDownload size={12} />
              </div>
              {downloads}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductivityApp;
