import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const LandingPage = () => {
  const images = [
    "/images/background1.jpg",
    "/images/background2.jpg",
    "/images/background3.jpg",
    "/images/background4.jpg",
  ];

  const [visibleImages, setVisibleImages] = useState(Array(images.length).fill(false));
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeouts = [];

    images.forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleImages((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * 750)
      );
    });

    const totalAnimationTime = images.length * 800;
    timeouts.push(
      setTimeout(() => {
        setShowContent(true);
      }, totalAnimationTime)
    );

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div
      className="relative grid grid-rows-2 grid-cols-2 gap-0 h-[calc(100vh-100px)]" 
      style={{ height: "calc(100vh - 100px)", overflowY: "hidden", }} 
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

      {}
      {showContent && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div
            className="animate-fadeAndGrow flex flex-col items-center"
            style={{
              animationDuration: "1s",
            }}
          >
            {}
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
              onClick={() => navigate("/packages")} 
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
