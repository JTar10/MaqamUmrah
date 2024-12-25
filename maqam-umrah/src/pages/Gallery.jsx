import React, { useEffect, useState } from "react";

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
  {
    title: "February 2024 Inter-MSA Trip",
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
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".trip-section");
      const viewportHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < viewportHeight * 0.8) {
          setVisibleSections((prev) =>
            prev.includes(index) ? prev : [...prev, index]
          );
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            className={`bg-white rounded-lg shadow-md p-4 mb-4 trip-section transition duration-1000 ${
              visibleSections.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-center text-2xl font-semibold mb-4">
              {trip.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {trip.photos.map((photo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-full rounded-lg overflow-hidden h-48 md:h-56 lg:h-64 transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={photo}
                    alt={`${trip.title} photo ${i + 1}`}
                    className="w-full h-full object-cover"
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
