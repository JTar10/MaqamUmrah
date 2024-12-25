import React from "react";

const trips = [
  {
    title: "October 2024 Inter-MSA Trip",
    photos: [
      "/images/oct2024/1.jpg",
      "/images/oct2024/2.jpg",
      "/images/oct2024/3.jpg",
      "/images/oct2024/4.jpg",
      "/images/oct2024/5.jpg",
      "/images/oct2024/6.jpg",
      "/images/oct2024/7.jpg",
      "/images/oct2024/8.jpg",
      "/images/oct2024/9.jpg",
    ],
  },
  // Add more trips as needed
];

const Gallery = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="pt-4 text-4xl font-bold text-center mb-8">Gallery</h1>
      <p className="text-gray-700 mb-6 text-center">
        Take a look at some of the memories we captured from our previous trips!
        You can discover more content by clicking on the Instagram icon above
        and visiting our page!
      </p>
      <div className="space-y-8">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 mb-4 opacity-0 animate-fadeAndMove"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <h2 className="text-center text-2xl font-semibold mb-4">{trip.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {trip.photos.map((photo, i) => (
                <div
                  key={i}
                  className="relative w-full rounded-lg overflow-hidden h-48 md:h-56 lg:h-64"
                >
                  <img
                    src={photo}
                    alt={`${trip.title} photo ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
