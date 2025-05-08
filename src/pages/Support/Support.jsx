import React, {use} from "react";

import supportImg from "../../assets/undraw_active-support_v6g0 (1).svg";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import {useLoaderData} from "react-router";
import {AuthContext} from "../../provider/Context";
import Spinner from "../../components/Spinner/Spinner";
import {Helmet} from "react-helmet-async";

const Support = () => {
  const supportData = useLoaderData();
  const {loading} = use(AuthContext);

  return (
    <>
      <Helmet>
        <title>AppMaze - Support</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className=" py-16 px-4 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Welcome! How can we help?
            </h2>
            <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
              Hi there, stuck somewhere? Don’t worry—we're here to help. Check
              out our step-by-step documentation or reach out for support.
            </p>
            <div className="p-8">
              <img className="w-full h-70" src={supportImg} alt="" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  mx-auto">
              {supportData?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-base-300 p-6 rounded-xl shadow-sm text-left hover:shadow-md transition"
                >
                  <img
                    src={item.icon}
                    className="mb-4 w-12 filter grayscale hue-rotate-60"
                  />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-base-200 mb-4">
                    {item.description}
                  </p>
                  <a href="#" className="text-sm text-secondary font-semibold">
                    {item.link}
                  </a>
                </div>
              ))}
            </div>
          </section>
          <section className="px-2">
            <GetInTouch></GetInTouch>
          </section>
        </>
      )}
    </>
  );
};

export default Support;
