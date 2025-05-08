import React from "react";

import {Rating, Star} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import defaultImg from "../../assets/user.png";
const Reviews = ({review, user}) => {
  return (
    <div>
      <div className="card w-full border border-base-300 bg-base-100 p-6">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img
                src={user.photoURL || defaultImg}
                alt={`${user?.displayName}'s profile`}
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{review?.user}</h3>
            <p className="text-sm text-gray-500">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="mt-4">
          {/* Display the rating from the review data */}
          <Rating
            style={{maxWidth: 150}}
            value={review?.rating}
            readOnly
            itemStyles={{
              itemShapes: Star,
              activeFillColor: "#FCD53F",
              inactiveFillColor: "#706f6f",
              itemStrokeWidth: 0,
              itemStrokeColor: "#FCD53F",
            }}
          />
        </div>
        <p className="mt-4 text-base-200">{review?.comment}</p>
      </div>
    </div>
  );
};

export default Reviews;
