// src/components/homecomponents/InfoCont.js
import React, { useState } from "react";
import "../../css/homecss/home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InfoCont = () => {
  const [routeData, setRouteData] = useState({
    current_location: "",
    destination: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRouteData({ ...routeData, [name]: value });
  };

  const handleBookNow = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/route", routeData);
      console.log(response.data);
      alert("Route found!");
      // Navigate to transport modes page with the route data
      navigate("/transportmodespage", { state: { start: routeData.current_location, end: routeData.destination } });
    } catch (error) {
      console.error(error);
      alert("Failed to find the route. Please try again.");
    }
  };

  return (
    <section className="info-container flex">
      <div className="sub-info-container flex">
        <div className="info">
          <span id="typed"></span>
          <h1>Let Transitease be your passport to everywhere!</h1>
          <p>Secure your ride, climb in, and let's wander!</p>
          <div className="inputWithIcon">
            <input
              type="text"
              name="current_location"
              placeholder="Current Location"
              value={routeData.current_location}
              onChange={handleChange}
              required
            />
            <ion-icon name="location"></ion-icon>
          </div>
          <div className="inputWithIcon">
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={routeData.destination}
              onChange={handleChange}
              required
            />
            <ion-icon name="navigate"></ion-icon>
          </div>
          <div className="book-div">
            <button className="book-now" onClick={handleBookNow}>
              Book Now!
            </button>
          </div>
        </div>
        <div className="image">
          <img
            src="https://img.freepik.com/premium-vector/world-globe-road-tape_648765-6769.jpg?w=740"
            alt="crossroads"
          />
        </div>
        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default InfoCont;
