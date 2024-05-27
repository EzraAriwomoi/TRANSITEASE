import React, { useState } from 'react';
import axios from 'axios';
import './Mode.css';

const ModeComponent = ({ pickupPoint, destination }) => {
  const [selectedMode, setSelectedMode] = useState('');
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [error, setError] = useState('');

  const handleFetchRoutes = () => {
    if (!selectedMode) {
      setError('Please select a mode of transport.');
      return;
    }

    setError('');
    // Fetch available routes based on pickup point, destination, and selected mode
    axios.get(`/api/routes?pickup=${pickupPoint}&destination=${destination}&mode=${selectedMode}`)
      .then(response => {
        setRoutes(response.data);
        if (response.data.length === 0) {
          setError('No routes available for the selected points and mode.');
        }
      })
      .catch(error => {
        console.error('Error fetching routes:', error);
        setError('Failed to fetch routes. Please try again.');
      });
  };

  const handleRouteSelection = (route) => {
    setSelectedRoute(route.route);
    setDepartureTime(route.time);
  };

  return (
    <div className="mode-container">
      <h2>Plan Your Trip</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="mode-details">
        <p><strong>Pickup Point:</strong> {pickupPoint}</p>
        <p><strong>Destination:</strong> {destination}</p>
      </div>
      <form className="mode-form">
        <div className="transport-modes">
          <button type="button" className={selectedMode === 'bus' ? 'selected' : ''} onClick={() => setSelectedMode('bus')}>Bus</button>
          <button type="button" className={selectedMode === 'train' ? 'selected' : ''} onClick={() => setSelectedMode('train')}>Train</button>
          <button type="button" className={selectedMode === 'taxi' ? 'selected' : ''} onClick={() => setSelectedMode('taxi')}>Taxi</button>
          <button type="button" className={selectedMode === 'ride' ? 'selected' : ''} onClick={() => setSelectedMode('ride')}>Ride</button>
        </div>
        <button type="button" onClick={handleFetchRoutes} className="fetch-routes-button">
          Fetch Routes
        </button>
        {routes.length > 0 && (
          <div className="routes-display">
            <label>
              Available Routes:
              <select value={selectedRoute} onChange={(e) => handleRouteSelection(JSON.parse(e.target.value))} required>
                <option value="">Select Route</option>
                {routes.map((route, index) => (
                  <option key={index} value={JSON.stringify(route)}>{route.route}</option>
                ))}
              </select>
            </label>
            {selectedRoute && (
              <div className="route-details">
                <p>Route: {selectedRoute}</p>
                <p>Departure Time: {departureTime}</p>
              </div>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ModeComponent;
