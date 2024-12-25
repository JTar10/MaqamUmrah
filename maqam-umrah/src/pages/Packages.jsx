// PackagesPage.jsx
import React from 'react';

const packages = [
  {
    id: 1,
    title: 'Inter-MSA Umrah February 2025',
    image: '/images/kabah.jpg', // Replace with actual image path
    details: [
      'This Umrah trip will be led by our very own Sheikh Abdirahman Hussein, Co-Founder of Maqam Umrah',
      'Price: $3,249 for students, $3,349 for non-students',
      'Travel Dates: February 15th-25th (Tentative Dates)',
      'Group Departure: All participants will meet at Toronto Pearson International Airport (YYZ) for our group check-in and departure.',
      'Accommodations: 4-Star Hotels, Quad occupancy',
      'Meals: Daily breakfast buffet in both Makkah and Madinah',
      'Transportation: VIP Bus services in and between Jeddah, Makkah, and Medinah',
      'Tours & Extras: Ihram for men, tours in Makkah & Medinah, pre-Umrah workshop/seminar, Q&A sessions, and a gift pack (which includes a drawstring bag and essentials)',
      'Free Ihram is included, and will be distributed in Medinah',
    ],
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdCa5TC9HUTo72yfAi7Xjn0xcNyzINiQap4zcf8xK3b0wq3CA/viewform',
  },
];

const PackageCard = ({ title, image, details, registrationLink, animationDelay }) => (
  <div
    className={`bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeAndMove`}
    style={{ animationDelay: `${animationDelay}s` }}
  >
    {/* Photo Section */}
    <img src={image} alt={title} className="w-full h-64 object-cover md:h-auto" />

    {/* Details Section */}
    <div className="p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className="text-left mb-4">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start mb-2">
              <span className="mr-2">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gold text-white py-2 px-4 rounded hover:bg-white hover:text-black hover:border hover:border-black transition-colors duration-300 text-center"
      >
        Register Now
      </a>
    </div>
  </div>
);

const Packages = () => (
  <div className="container mx-auto p-4">
    <h1 className="pt-4 text-3xl font-bold mb-8 text-center">Our Packages</h1>
    <div className="space-y-8">
      {packages.map((pkg, index) => (
        <PackageCard
          key={pkg.id}
          {...pkg}
          animationDelay={index * 0.3} // Adds delay for each card
        />
      ))}
    </div>
  </div>
);

export default Packages;
