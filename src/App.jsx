import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import SignupPage from "./pages/signuppage";
import TransportModes from "./pages/transportmodespage";
import TicketingPage from "./pages/ticketingpage";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transportmodespage" element={<TransportModes />} />
          <Route path="/ticketingpage" element={<TicketingPage />} />
          <Route path="/signuppage" element={<SignupPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
