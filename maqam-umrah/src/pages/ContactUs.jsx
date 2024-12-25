import React, { useEffect, useState } from "react";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false); // Start hidden

  useEffect(() => {
    // Add a slight delay before setting the content to visible
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Adjust the delay for smoother handling
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="pt-4 text-3xl font-bold">Contact Us</h1>
      </div>

      {/* Main Content */}
      <div
        className={`transition-opacity transition-transform duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0" // Visible state
            : "opacity-0 translate-y-6"   // Hidden state
        }`}
      >
        <div className="flex flex-col md:flex-row items-start">
          {/* Left Section: Contact Information */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="mb-4">
              If you have any questions about your Umrah trip, don't hesitate to reach out to us!
            </p>
            <ul className="space-y-2">
              <li>
                <strong>Phone:</strong> +1 (613) 981-4388
              </li>
              <li>
                <strong>Email:</strong> maqamservices@gmail.com
              </li>
              <li>
                <strong>Office Address:</strong> 2378 Holly Lane Unit 202
              </li>
              <li>
                <strong>Office Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM
              </li>
            </ul>
          </div>

          {/* Right Section: Google Maps Embed */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1312.2248857204158!2d-75.64095730656358!3d45.37940749559632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0f3577ea745f%3A0x8e1cd61fa6bb43a8!2s2378%20Holly%20Ln%20Suit%23%20202%2C%20Ottawa%2C%20ON%20K1V%207P2!5e0!3m2!1sen!2sca!4v1734995443921!5m2!1sen!2sca"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Maqam Umrah Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
