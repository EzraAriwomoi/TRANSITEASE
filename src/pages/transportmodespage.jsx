// src/pages/TransportModesPage.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchTransportModes, fetchTransportFeed } from "../api";
import TmpDetailsSection from "../components/transportmodescomponents/TmpDetailsSection";
import TmpActionButtons from "../components/transportmodescomponents/TmpActionButtons";
import TmpFeed from "../components/transportmodescomponents/TmpFeed";

const TransportModesPage = () => {
  const location = useLocation();
  const { start, end } = location.state || {};
  
  const [modes, setModes] = useState([]);
  const [feed, setFeed] = useState([]);
  const [selectedMode, setSelectedMode] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const modesData = await fetchTransportModes();
        setModes(modesData);
        const feedData = await fetchTransportFeed();
        setFeed(feedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
  };

  const singularOrPluralMatch = (mode, carName) => {
    if (mode.toLowerCase() === 'buses') {
      return carName.toLowerCase().includes('bus');
    }
    const singularMode = mode.endsWith('s') ? mode.slice(0, -1) : mode;
    return carName.toLowerCase().includes(mode.toLowerCase()) ||
           carName.toLowerCase().includes(singularMode.toLowerCase());
  };

  const filteredFeed = feed.filter(item => {
    const matchesMode = selectedMode ? singularOrPluralMatch(selectedMode, item.car_name) : true;
    const matchesStartPoint = start ? item.route.includes(start) : true;
    const matchesEndPoint = end ? item.route.includes(end) : true;
    return matchesMode && matchesStartPoint && matchesEndPoint;
  });

  return (
    <div className="transport-modes-page flex-col">
      <TmpDetailsSection start={start} end={end} />
      <TmpActionButtons modes={modes} onModeSelect={handleModeSelect} />
      <TmpFeed feed={filteredFeed} />
    </div>
  );
};

export default TransportModesPage;
