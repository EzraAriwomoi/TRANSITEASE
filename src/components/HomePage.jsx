// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="title">TransitEase</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/purchase">Purchase Ticket</Link>
          <Link to="/plan">Plan Trip</Link>
          <Link to="/analytics">Data Analytics</Link>
          <Link to="/accessibility">Accessibility</Link>
        </nav>
      </header>

      <main className="main-content">
        <section className="welcome-section">
          <h2>Welcome to TransitEase</h2>
          <p>Your one-stop solution for all your public transport needs. Plan your trips, purchase tickets, and explore our data analytics to make your journey seamless and efficient.</p>
        </section>

        <section className="feature-section">
          <div className="feature-card">
            <img src="/images/tickets.png" alt="Purchase Tickets" className="feature-icon" />
            <h3>Purchase Tickets</h3>
            <p>Securely purchase tickets for your preferred routes and ticket types. With multiple payment options, you can enjoy a hassle-free travel experience. Choose from single rides, daily passes, or monthly passes and get your tickets instantly.</p>
          </div>

          <div className="feature-card">
            <img src="/images/plan.png" alt="Plan Your Trip" className="feature-icon" />
            <h3>Plan Your Trip</h3>
            <p>Find the best routes and schedules for your journey using our trip planning tool. Get real-time updates, alternative routes, and make informed travel decisions to reach your destination efficiently.</p>
          </div>

          <div className="feature-card">
            <img src="/images/analytics.png" alt="Data Analytics" className="feature-icon" />
            <h3>Data Analytics</h3>
            <p>Explore detailed analytics on public transport usage. Understand peak travel times, popular routes, and optimize your travel plans. Our data insights empower you to avoid crowded routes and ensure a comfortable journey every time.</p>
          </div>

          <div className="feature-card">
            <img src="/images/accessibility.png" alt="Accessibility" className="feature-icon" />
            <h3>Accessibility</h3>
            <p>Designed to be accessible for everyone, our app offers features such as text-to-speech, high-contrast mode, and easy navigation. TransitEase is committed to providing a user-friendly experience for all, ensuring that everyone can access and benefit from our services.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 TransitEase. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
