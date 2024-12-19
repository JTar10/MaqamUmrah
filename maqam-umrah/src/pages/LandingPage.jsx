import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const images = [
    "/images/background1.jpg",
    "/images/background2.jpg",
    "/images/background3.jpg",
    "/images/background4.jpg",
  ];

  const [visibleImages, setVisibleImages] = useState(Array(images.length).fill(false));

  useEffect(() => {
    const timeouts = [];
  
    images.forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          console.log(`Animating image at index ${index}`);
          setVisibleImages((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * 1000) // Each image fades in one after the other
      );
    });
  
    // Cleanup on unmount
    return () => {
      console.log("Cleaning up timeouts");
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []); // Change dependency array to [] to run only once
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ${
            visibleImages[index] ? "animate-fadeAndMove" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default LandingPage;

