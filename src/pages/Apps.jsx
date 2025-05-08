import React, {useContext, useEffect, useState} from "react";
import Slider from "../components/Slider/Slider";
import {Link, useLoaderData} from "react-router";

import ProductivityApps from "../components/ProductivityApps/ProductivityApps";
import TrendingApps from "../components/TrendingApps/TrendingApps";
import GamingApps from "../components/GamingApps/GamingApps";
import HealthApps from "../components/HealthApps/HealthApps";
import noResult from "../assets/no-results.png";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import {IoSearch} from "react-icons/io5";

import SearchedApp from "../components/SearchedApp/SearchedApp";
import Spinner from "../components/Spinner/Spinner";
import {AuthContext} from "../provider/Context";
import Teams from "../components/Teams/Teams";
import {Helmet} from "react-helmet-async";
import {FaXmark} from "react-icons/fa6";

const Apps = () => {
  const data = useLoaderData();
  const [trendingApps, setTrendingApps] = useState([]);
  const [productivityApps, setProductivityApps] = useState([]);
  const [gamingApps, setGamingApps] = useState([]);
  const [healthApps, setHealthApps] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchedApps, setSearchedApps] = useState(null);
  const {loading, setLoading} = useContext(AuthContext);
  const [showSearchedApps, setShowSearchedApps] = useState(false);
  useEffect(() => {
    const trendingFilteredApps = data.filter((app) => app.isTrending);
    setTrendingApps(trendingFilteredApps);
    const healthFilteredApps = data.filter(
      (app) => app.category === "Health & Fitness"
    );
    setHealthApps(healthFilteredApps);
    const gamingFilteredApps = data.filter((app) => app.category === "Gaming");
    setGamingApps(gamingFilteredApps);
    const productivityFilteredApps = data.filter(
      (app) => app.category === "Productivity"
    );
    setProductivityApps(productivityFilteredApps);
    if (searchValue) {
      setLoading(true);
      const delay = setTimeout(() => {
        const searchedMatchedApps = data.filter(
          (app) =>
            app.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            app.category.toLowerCase().includes(searchValue.toLowerCase()) ||
            app.description
              .toLowerCase()
              .split(" ")
              .includes(searchValue.toLowerCase())
        );
        setSearchedApps(searchedMatchedApps);
        setLoading(false);
      }, 500);
      return () => clearTimeout(delay);
    }
    if (searchValue.length === 0) {
      setShowSearchedApps(false);
    }
  }, [data, searchValue, setLoading]);
  const handleSearch = () => {
    if (searchValue) {
      setShowSearchedApps(true);
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AppMaze - Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div>
        {/* Slider Section */}
        <section className="rounded-2xl">
          <Slider></Slider>
          {/* Search Section */}
          <section className="relative left-0 right-0 z-10 bottom-10 flex  justify-center w-11/12 md:w-full mx-auto ">
            <div className="border-t border-base-300  rounded-t-2xl  w-full max-w-xl pt-5 pb-2 bg-white relative">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="flex  items-center gap-2 rounded-t-2xl bg-white px-8 relative"
              >
                <input
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  placeholder="Search your app here..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 "
                />
                {searchValue && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchValue("");
                      setShowSearchedApps(false);
                    }}
                    className="absolute right-30 text-md top-3 cursor-pointer z-50"
                  >
                    <FaXmark />
                  </button>
                )}
                <button
                  type="submit"
                  onClick={handleSearch}
                  className="rounded-lg bg-purple-600 px-5 py-2 text-white font-semibold hover:bg-purple-700 transition cursor-pointer"
                >
                  <IoSearch size={25} />
                </button>
              </form>
              <div className=" text-left bg-white pb-2 pt-3 mt-1 absolute left-0 right-0 border-b rounded-b-2xl border-base-300">
                <ul>
                  {searchValue &&
                    searchedApps?.slice(0, 7).map((app) => (
                      <li
                        key={app.id}
                        className="w-full py-2 pl-12 bg-transparent border-none hover:bg-base-300 shadow-none text-left group-first:cursor-pointer"
                      >
                        <Link
                          className="block cursor-pointer"
                          to={`appdetails/${app.id}`}
                        >
                          {app.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </section>
        </section>

        {showSearchedApps ? (
          loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-25">
              {searchedApps && searchedApps.length > 0 ? (
                searchedApps.map((app) => (
                  <SearchedApp key={app.id} app={app}></SearchedApp>
                ))
              ) : (
                <div className="flex flex-col gap-2 justify-center items-center col-span-full py-10">
                  <img className="w-20" src={noResult} alt="" />
                  <h1 className="font-semibold text-2xl">
                    Sorry, No Apps Found:{" "}
                  </h1>
                  <p>
                    ( We couldn’t find any apps matching :{" "}
                    <span className="text-blue-500">{searchValue}</span>)
                  </p>
                </div>
              )}
            </div>
          )
        ) : (
          <>
            {/* Popular Apps Section */}
            <section>
              <TrendingApps trendingApps={trendingApps}></TrendingApps>
            </section>
            {/* Gaming Apps Section */}
            <section>
              <GamingApps gamingApps={gamingApps}></GamingApps>
            </section>
            {/* Productivity Apps Section */}
            <section>
              <ProductivityApps
                productivityApps={productivityApps}
              ></ProductivityApps>
            </section>
            {/* Health Apps Section */}
            <section>
              <HealthApps healthApps={healthApps}></HealthApps>
            </section>

            {/* Feature  Section */}
            <section>
              <FeatureSection></FeatureSection>
            </section>
            {/* Team Section */}
            <section>
              <Teams></Teams>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Apps;
