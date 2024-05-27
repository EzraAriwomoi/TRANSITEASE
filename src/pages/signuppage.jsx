// src/pages/SignupPage.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/signupcss/signup.css";

const SignupPage = () => {
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignupActive(!isSignupActive);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/signup", formData);
      console.log(response.data);
      alert("Signup successful!");
      toggleForm();  // Switch to login form on successful signup
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/login", {
        username: formData.username,
        password: formData.password,
      });
      console.log(response.data);
      alert("Login successful!");
      navigate("/");  // Redirect to the homepage on successful login
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <section className="form">
      <div className={`container ${isSignupActive ? "active" : ""}`}>
        <div className="user signinBx">
          <div className="imgBx">
            <img
              src="https://st4.depositphotos.com/20152108/22203/v/450/depositphotos_222031158-stock-illustration-transportation-coming-out-phone-screen.jpg"
              alt="Sign In"
            />
          </div>
          <div className="formBx">
            <form onSubmit={handleLogin}>
              <h2>Sign In</h2>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input type="submit" value="Login" />
              <p className="signup">
                Don't have an account?{" "}
                <button className="signupInbtn" type="button" onClick={toggleForm}>
                  Sign Up
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form onSubmit={handleSignup}>
              <h2>Create an Account</h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
              <input type="submit" value="Sign Up" />
              <p className="signup">
                Already have an account?{" "}
                <button className="signupInbtn" type="button" onClick={toggleForm}>
                  Sign In
                </button>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img
              src="https://st4.depositphotos.com/20152108/22203/v/450/depositphotos_222031158-stock-illustration-transportation-coming-out-phone-screen.jpg"
              alt="Sign Up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
