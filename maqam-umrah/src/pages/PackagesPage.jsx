import React from "react";

const PackagesPage = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-gray-800">Our Umrah Packages</h1>
      <p className="text-gray-600 mt-2">
        Choose from a variety of packages designed to suit your needs.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Package */}
        <div className="border p-4 rounded-lg shadow hover:shadow-lg">
          <h2 className="text-xl font-bold text-gray-700">Premium Package</h2>
          <p className="text-gray-500 mt-2">
            Includes 5-star hotels, guided tours, and luxury transport.
          </p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Learn More
          </button>
        </div>
        {/* Add more packages as needed */}
      </div>
    </div>
  );
};

export default PackagesPage;