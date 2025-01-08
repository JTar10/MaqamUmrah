import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const reviewsData = [
  { name: "Brother 1.", rating: 4.5, text: "Amazing service and attention to detail!" },
  { name: "Brother 2.", rating: 5, text: "Truly a memorable experience, highly recommend!" },
  { name: "Sister 1.", rating: 4, text: "Great organization and smooth trip arrangements." },
  { name: "Brother 3.", rating: 5, text: "Top-notch service from start to finish!" },
  { name: "Sister 2.", rating: 5, text: "Exceeded my expectations, thank you so much!" },
  { name: "Sister 3.", rating: 3.5, text: "Good overall, but some minor delays." },
  { name: "Brother 4.", rating: 4, text: "Wonderful journey, would book again!" },
  { name: "Sister 4.", rating: 5, text: "Exceeded my expectations, thank you so much!" },
  { name: "Brother 5.", rating: 4.5, text: "Professional team, everything went perfectly." },
  { name: "Sister 5.", rating: 3.5, text: "Good overall, but some minor delays." },
];

const Review = ({ name, rating, text }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-bold mb-2 text-center">{name}</h3>
      <div className="flex justify-center items-center mb-2">
        {}
        {Array.from({ length: fullStars }, (_, i) => (
          <FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-500 mr-1" />
        ))}
        {}
        {halfStars === 1 && (
          <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500 mr-1" />
        )}
      </div>
      <p className="text-gray-700 text-center">{text}</p>
    </div>
  );  
};

const ReviewsPage = () => {
  const [visiblePairs, setVisiblePairs] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePairs((prev) => (prev < reviewsData.length / 2 ? prev + 1 : prev));
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="pt-4 text-3xl font-bold mb-8 text-center">Customer Reviews</h1>
      {Array.from({ length: Math.ceil(reviewsData.length / 2) }, (_, pairIndex) => (
        <div
          key={pairIndex}
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 transition-all duration-700 ${
            pairIndex < visiblePairs ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {}
          <Review {...reviewsData[pairIndex * 2]} />
          {reviewsData[pairIndex * 2 + 1] && <Review {...reviewsData[pairIndex * 2 + 1]} />}
        </div>
      ))}
    </div>
  );
};

export default ReviewsPage;
