import React, {use} from "react";

const featuresPromise = fetch("/feature.json").then((res) => res.json());

const FeatureSection = () => {
  const features = use(featuresPromise);
  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose AppMaze?
        </h2>
        <p className="text-base-200 text-lg">
          We help users find apps they love — fast, smart, and personalized.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-2xl shadow p-6 text-center"
          >
            <img className="w-16 mx-auto mb-2" src={feature.icon} alt="" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
