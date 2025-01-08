import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Faqs = () => {
  const navigate = useNavigate();

  const faqs = [
    { question: "What is Umrah?", answer: "Umrah is a pilgrimage to Mecca, Saudi Arabia, performed by Muslims that can be undertaken at any time of the year, unlike Hajj, which has specific dates." },
    { question: "Are sisters allowed to go?", answer: "Yes, sisters are allowed to join the trip, inshaAllah." },
    { question: "Do sisters need to have a mahram?", answer: "It is preferred they do, but we have consulted imams and they have advised that the sisters can go with a trusted group of sisters." },
    { question: "How do I register for the Umrah trip?", answer: "Join the University of Ottawa MSA for an enriching 12-day Umrah trip during October 2024's Reading Week, inshaAllah. To guarantee a spot, you must e-transfer a non-refundable $1000 deposit to the provided payment information in the google form. Soon after submission, you will receive a confirmation email with further details." },
    { question: "Are visas included in the Umrah package?", answer: "Visas will not be included, but we will help you with your application!" },
    { question: "What documents do I need for the Umrah trip?", answer: "We will contact you with any required documents, inshaAllah." },
    { question: "Can I extend my stay in Saudi Arabia after the Umrah trip?", answer: "If you wish to extend your stay, you will need to make separate arrangements yourself. Inform us about your plans so we can guide you accordingly." },
    { question: "How do I stay connected with the group during the trip?", answer: "We will provide contact details for the trip leaders or coordinators. Additionally, there may be a communication platform for participants to stay informed and connected." },
    { question: "Can my family or friends join?", answer: "Yes, they can join, inshaAllah!" },
    { question: "How does the process of payment work?", answer: "If you wish to pay for it completely at once (this includes a non-refundable $1000 deposit), you are welcome to do that, but if you choose to pay in installments, then you would pay the $1000 non-refundable deposit first then $500 (or whatever remains) each month." },
  ];

  const [visibleFAQs, setVisibleFAQs] = useState(Array(faqs.length + 1).fill(false));

  useEffect(() => {
    const timeouts = [];

    [...faqs, {}].forEach((_, index) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleFAQs((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }, index * 250)
      );
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="pt-4 text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ${
              visibleFAQs[index] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
        <div
          className={`transition-all duration-1000 ${
            visibleFAQs[faqs.length] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h2 className="text-xl font-semibold">
            For any more questions, visit our Contact Us page
          </h2>
          <button
            className="bg-gold text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:border hover:border-black transition duration-300 mt-4"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
