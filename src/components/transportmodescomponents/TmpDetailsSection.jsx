// src/components/transportmodescomponents/TmpDetailsSection.js
import React from "react";
import "../../css/transportmodes/transportmodes.css";

const TmpDetailsSection = ({ start, end }) => {
  return (
    <div className="tmp-details-section flex">
      <span>Start: {start}</span>
      <span>  -  </span>
      <span>End: {end}</span>
    </div>
  );
};

export default TmpDetailsSection;
