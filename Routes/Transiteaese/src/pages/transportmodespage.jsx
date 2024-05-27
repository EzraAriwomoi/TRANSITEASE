import React from "react";
import "../css/transportmodes/transportmodes.css";
import TmpDetailsSection from "../components/transportmodes/TmpDetailsSection";
import TmpActionButtons from "../components/transportmodes/TmpActionButtons";
import TmpFeed from "../components/transportmodes/TmpFeed";

const TransportModes = () => {
  return (
    <div className="transport-modes-page flex-col">
      <TmpDetailsSection />
      <TmpActionButtons />
      <TmpFeed />
    </div>
  );
};

export default TransportModes;
