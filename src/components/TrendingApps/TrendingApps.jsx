import React from "react";
import TrendingApp from "./TrendingApp";

const TrendingApps = ({trendingApps}) => {
  
  return (
    <div className="mt-8">
      <h1 className="py-3 text-3xl font-bold">Trending Apps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {trendingApps.map((app) => (
          <TrendingApp key={app.id} app={app}></TrendingApp>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;
