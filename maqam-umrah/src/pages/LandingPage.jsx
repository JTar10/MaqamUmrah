import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Adjust path if needed

const LandingPage = () => {
  const images = [
    "/images/background1.jpg",
    "/images/background2.jpg",
    "/images/background3.jpg",
    "/images/background4.jpg",
  ];

  const [visibleImages, setVisibleImages] = useState(Array(images.length).fill(false));
  const [showContent, setShowContent] = useState(false); // For logo and button
  const navigate = useNavigate();

  useEffect(() => {
    const timeouts = [];

    // Animate images one by one
    images.forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleImages((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * 750) // Each image fades in one after the other
      );
    });

    // Show content slightly earlier after the last image fades in
    const totalAnimationTime = images.length * 800; // Adjusted for earlier appearance
    timeouts.push(
      setTimeout(() => {
        setShowContent(true);
      }, totalAnimationTime)
    );

    // Cleanup on unmount
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div
      className="relative grid grid-rows-2 grid-cols-2 gap-0 h-[calc(100vh-100px)]" // Adjust for navbar height
      style={{ height: "calc(100vh - 100px)", overflowY: "hidden", }} // Matches Tailwind class for fallback
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative w-full h-full bg-cover bg-center transition-all duration-1000 ${
            visibleImages[index] ? "animate-fadeAndMove" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      {/* Centered logo and content */}
      {showContent && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div
            className="animate-fadeAndGrow flex flex-col items-center"
            style={{
              animationDuration: "1s",
            }}
          >
            {/* Circular Logo */}
            <img
              src={logo}
              alt="Maqam Umrah Logo"
              className="w-32 h-32 rounded-full mb-6"
            />
            <p className="text-black text-lg text-center mb-6 bg-gold rounded-lg px-2 py-1">
              Your Trusted Umrah Travel Partner
            </p>
            <button
              className="bg-gold text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:border hover:border-black transition duration-300"
              onClick={() => navigate("/packages")} // Navigate to packages page
            >
              Explore Packages
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
