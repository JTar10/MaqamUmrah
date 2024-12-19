import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Maqam Umrah
      </h1>
      <p className="text-lg text-gray-600 mt-4 max-w-lg">
        Your journey of faith begins here. Discover exclusive Umrah packages
        tailored for a spiritual and comfortable experience.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Explore Packages
      </button>
    </div>
  );
};

export default LandingPage;