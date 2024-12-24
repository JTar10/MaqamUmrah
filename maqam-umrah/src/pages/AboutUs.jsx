import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const team = [
    {
      name: "Sh. Abdirahman",
      profile: "Currently residing in Ottawa, shaykh Abdirahman is not only the co-founder of Maqam Umrah, but he is also one of the imams at the Ottawa Mosque. He obtained his undergraduate degree in the faculty of shariah at the Islamic university of Medina and has led a total of 4 hajj trips and many more umrah trips.",
      image: "/images/shaykh.png",
    },
    {
      name: "Br. Siad",
      profile: "Whenever I visit Medina, there is this one Mandi spot I need to eat at twice before I am satisfied. You will only know the secret mandi spot after you register for umrah with us! btw I also co-found Maqam Umrah.",
      image: "/images/siad.png",
    },
    {
      name: "Sr. Mariam",
      profile: "I am an Ottawa resident and a member of the Maqam Umrah Team! I'm happy to serve on this umrah team and help out!",
      image: "/images/mariam.png",
    },
  ];

  const [visibleTeam, setVisibleTeam] = useState(Array(team.length).fill(false));

  useEffect(() => {
    const timeouts = [];

    team.forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleTeam((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * 500) // Each member fades in one after the other
      );
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="pt-4 text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-6">
        Meet the Maqam Umrah Team!
      </p>
      <div className="space-y-8">
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-start transition-all duration-1000 ${
              visibleTeam[index]
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            {/* Image with Golden Frame */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover"
                style={{ borderColor: '#D4AF37', borderWidth: '6px', borderStyle: 'solid' }}
              />
            </div>

            {/* Text Section */}
            <div className="text-left">
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <p className="text-gray-700">{member.profile}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
