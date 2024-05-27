import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TransportModes from "./pages/transportmodespage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransportModes />} />
      </Routes>
    </Router>
  );
};

export default App;
