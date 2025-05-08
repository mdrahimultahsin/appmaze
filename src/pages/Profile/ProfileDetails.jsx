import React, {useContext} from "react";
import {AuthContext} from "../../provider/Context";
import Swal from "sweetalert2";

const ProfileDetails = () => {
  const {user, profileUpdate} = useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    profileUpdate(name, photo)
      .then(() => {
        Swal.fire({
          title: "Logged in successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="p-6 overflow-x-hidden">
      <h1 className="text-xl font-bold pb-2">Profile Details:</h1>
      <div className="space-y-4">
        <h2 className="font-bold text-lg">
          Your Name: <br />{" "}
          <span className="text-base-200 text-base">{user?.displayName}</span>
        </h2>
        <h2 className="font-bold text-lg">
          Your Email: <br />{" "}
          <span className="text-base-200 text-base">{user?.email}</span>
        </h2>
        <h2 className="font-bold text-lg">
          Your PhotoURL: <br />
          <span className="text-base-200 text-base">{user?.photoURL}</span>
        </h2>
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold pb-2 underline">
          Update Your Profile:
        </h1>
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-base-200 mb-1 ">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="w-full md:w-8/12 px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
              placeholder="New Name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-base-200 mb-1">
              Photo URL:
            </label>
            <input
              type="text"
              name="photo"
              className="w-full md:w-8/12 px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
              placeholder="Your Photo URL"
            />
          </div>
          <button
            className="btn btn-secondary hover:bg-secondary hover:text-white px-6 text-lg font-semibold rounded-lg"
            type="submit"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;
