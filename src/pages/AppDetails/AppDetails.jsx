import React, {useContext, useEffect, useRef, useState} from "react";
import {useLoaderData, useParams} from "react-router";
import {FaArrowRight, FaFire} from "react-icons/fa";
import {Rating, Star} from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import {AuthContext} from "../../provider/Context";
import Reviews from "../../components/Reviews/Reviews";
import {toast} from "react-toastify";
import ErrorPage from "../ErrorPage/ErrorPage";
import {Helmet} from "react-helmet-async";

const AppDetails = () => {
  const data = useLoaderData();
  const btnRef = useRef();
  const [installBtn, setInstallBtn] = useState(false);
  const [installCount, setInstallCount] = useState(0);
  const [comment, setComment] = useState("");
  const {id} = useParams();
  const [apps, setApps] = useState({});
  const {user} = useContext(AuthContext);
  const [displayReview, setDisplayReview] = useState([]);
  const [ratings, setRatings] = useState(0);
  useEffect(() => {
    const selectedApps = data.find((app) => app.id === id);
    setApps(selectedApps);
    setDisplayReview(selectedApps?.reviews || []);
  }, [data, id]);

  const {
    name,
    thumbnail,
    developer,
    rating,
    downloads,
    description,
    features,
    category,
    isTrending,
  } = apps || {};
  const handleInstallBtn = () => {
    if (btnRef.current.innerText === "Install") {
      toast.success("App Installed - Enjoy exploring the app 🎉",{
        autoClose: 2000,
      });
    }
    if(btnRef.current.innerText === "Uninstall"){
      toast.warn("App Uninstalled",{
        autoClose: 1500,
      })
    }
    setInstallBtn(!installBtn);
    setInstallCount((prev) => prev + 1);
  };
  const handleReviewSubmit = () => {
    if (!ratings || !comment) {
      toast.error("Please provide both a rating and a comment.");
      return;
    }

    const newReview = {
      user: user?.displayName || "Anonymous",
      rating: ratings,
      comment: comment,
    };
    if (newReview) {
      setDisplayReview([...displayReview, newReview]);
    }

    setRatings(0);
    setComment("");
  };
  return (
    <>
      <Helmet>
        <title>{`AppMaze - ${apps?.name ? name : "AppDetails"}`}</title>
        <link rel="canonical" href="https://appmaze-ca696.web.app/" />
      </Helmet>
      {!apps ? (
        <ErrorPage />
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-6 rounded-2xl p-5 border shadow-md border-base-300">
            <div className="w-full md:w-1/3 relative rounded-xl">
              {isTrending && (
                <div className="badge badge-md py-4 text-white border-none bg-red-600 text-base absolute right-0">
                  <FaFire size={18} /> Trending Now
                </div>
              )}

              <img
                src={thumbnail}
                alt={name}
                className="w-full h-full rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <div className="w-fit inline-flex items-center gap-2 border border-[#8b5cf6] text-[#8b5cf6] bg-white text-sm px-3 py-1 rounded-full shadow-sm font-medium mb-3">
                <span className="w-2 h-2 rounded-full bg-[#8b5cf6]"></span>
                {category}
              </div>
              <h1 className="text-3xl font-semibold mb-2">{name}</h1>
              <p className="text-sm text-gray-500 mb-2">By {developer}</p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-yellow-500">⭐ {rating}</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-600">{downloads} Downloads</span>
              </div>
              <p className="text-gray-700 mb-4 max-w-lg">{description}</p>
              {/* Features Section */}
              <div className="mt-4">
                <h2 className="text-2xl font-semibold mb-3">Features :</h2>
                <div className="flex flex-wrap gap-4">
                  {features?.map((feature, index) => (
                    <button
                      key={index}
                      className="text-base-200 border border-base-300 p-3 rounded-full text-sm"
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>
              {/* Install Button */}
              <div>
                <button
                  ref={btnRef}
                  onClick={handleInstallBtn}
                  className={`btn btn-primary w-full md:w-auto mt-5 text-lg px-12 py-6 ${
                    installBtn ? "btn-outline" : ""
                  }`}
                >
                  {installBtn ? "Uninstall" : "Install"}
                </button>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <div className=" p-6 rounded-2xl mb-4 border border-base-300 shadow-md">
              <h1 className="font-bold text-xl py-4">
                How was your experience?
              </h1>
              <div className="pb-4">
                <Rating
                  disabled={installCount < 1}
                  style={{maxWidth: 220}}
                  value={ratings}
                  itemStyles={{
                    itemShapes: Star,
                    activeFillColor: installCount < 1 ? "#706f6f" : "#FCD53F",
                    inactiveFillColor: "#706f6f",
                    itemStrokeWidth: 0,
                    itemStrokeColor: "#FCD53F",
                  }}
                  halfFillMode="svg"
                  onChange={(val) => setRatings(val)}
                />
              </div>
              <h2 className="py-2 text-xl font-semibold">Write Your Review</h2>

              <textarea
                name="review"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                className="border border-base-300 w-full min-h-30 rounded-xl p-4"
                placeholder="Describe Your Experience here..."
              ></textarea>

              <div
                className="tooltip tooltip-primary tooltip-bottom"
                data-tip={
                  installCount < 1 ? "To Submit review Install App first" : ""
                }
              >
                <button
                  disabled={installCount < 1}
                  onClick={handleReviewSubmit}
                  className={`btn btn-secondary mt-4 ${
                    installCount < 1 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
          <div className="border border-base-300 rounded-2xl p-8 shadow-md mt-10">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-5">
              Reviews <FaArrowRight size={18} />
            </h2>
            {/* REview Card */}
            <div className="space-y-4">
              {displayReview?.map((review, i) => (
                <Reviews user={user} key={i} review={review} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppDetails;
