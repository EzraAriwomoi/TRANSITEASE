// src/components/transportmodescomponents/TmpActionButtons.js
import React from "react";
import "../../css/transportmodes/transportmodes.css";

const TmpActionButtons = ({ modes = [], onModeSelect }) => {
  return (
    <div className="tmp-action-buttons flex">
      {modes.map((mode, index) => (
        <button key={index} onClick={() => onModeSelect(mode)}>
          {mode}
        </button>
      ))}
    </div>
  );
};

export default TmpActionButtons;
