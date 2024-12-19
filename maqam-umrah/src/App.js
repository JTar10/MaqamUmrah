import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PackagesPage from "./pages/PackagesPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/packages" element={<PackagesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;