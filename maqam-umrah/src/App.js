import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import PackagesPage from "./pages/PackagesPage";
import AboutUs from "./pages/AboutUs";
import Reviews from "./pages/Reviews";
import FAQs from "./pages/Faqs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
