import React, {use, useEffect, useState} from "react";
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
import { Helmet } from "react-helmet-async";

const Apps = () => {
  const data = useLoaderData();
  const [trendingApps, setTrendingApps] = useState([]);
  const [productivityApps, setProductivityApps] = useState([]);
  const [gamingApps, setGamingApps] = useState([]);
  const [healthApps, setHealthApps] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchedApps, setSearchedApps] = useState(null);
  const {loading, setLoading} = use(AuthContext);

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
            app.description.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchedApps(searchedMatchedApps);
        setLoading(false);
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [data, searchValue, setLoading]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>AppMaze - Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div>
        {/* Slider Section */}
        <section className="rounded-2xl relative">
          <Slider></Slider>
          {/* Search Section */}
          <section className="absolute left-0 right-0 z-10 -bottom-10 flex justify-center w-11/12 md:w-full mx-auto ">
            <div className="flex w-full max-w-xl items-center gap-2 rounded-2xl bg-white px-8 py-5 shadow-lg">
              <input
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search your app here..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="rounded-lg bg-purple-600 px-5 py-2 text-white font-semibold hover:bg-purple-700 transition cursor-pointer">
                <IoSearch size={25} />
              </button>
            </div>
          </section>
        </section>
        {searchValue ? (
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
