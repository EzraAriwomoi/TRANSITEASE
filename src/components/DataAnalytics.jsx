import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import './DataAnalyticsDashboard.css';

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DataAnalyticsDashboard = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    // Fetch analytics data from API
    axios.get('/api/analytics')
      .then(response => setAnalyticsData(response.data))
      .catch(error => console.error('Error fetching analytics data:', error));
  }, []);

  if (!analyticsData) {
    return <p>Loading...</p>;
  }

  const { demographics, travelPatterns, revenueStreams, performanceMetrics, realTimeUpdates } = analyticsData;

  return (
    <div className="dashboard-container">
      <h1>Data Analytics Dashboard</h1>
      <div className="dashboard-section">
        <div className="dashboard-card">
          <h2>Passenger Demographics</h2>
          <Bar data={{
            labels: ['18-25', '26-35', '36-45', '46-60', '60+'],
            datasets: [
              {
                label: 'Passenger Demographics',
                data: demographics,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
              },
            ],
          }} options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Passenger Demographics' },
            },
          }} />
        </div>
        <div className="dashboard-card">
          <h2>Travel Patterns</h2>
          <Line data={{
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
              {
                label: 'Travel Patterns',
                data: travelPatterns,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                fill: false,
              },
            ],
          }} options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Travel Patterns' },
            },
          }} />
        </div>
      </div>
      <div className="dashboard-section">
        <div className="dashboard-card">
          <h2>Revenue Streams</h2>
          <Pie data={{
            labels: ['Tickets', 'Subscriptions', 'Ads', 'Other'],
            datasets: [
              {
                label: 'Revenue Streams',
                data: revenueStreams,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                ],
              },
            ],
          }} options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Revenue Streams' },
            },
          }} />
        </div>
        <div className="dashboard-card">
          <h2>Operational Performance</h2>
          <Doughnut data={{
            labels: ['On-time', 'Delayed', 'Cancelled'],
            datasets: [
              {
                label: 'Operational Metrics',
                data: performanceMetrics,
                backgroundColor: [
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                ],
              },
            ],
          }} options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Operational Performance' },
            },
          }} />
        </div>
      </div>
      <div className="dashboard-section">
        <div className="dashboard-card">
          <h2>Real-time Updates</h2>
          {realTimeUpdates && realTimeUpdates.labels && realTimeUpdates.datasets ? (
            <Line data={{
              labels: realTimeUpdates.labels,
              datasets: realTimeUpdates.datasets.map((dataset, index) => ({
                ...dataset,
                backgroundColor: `rgba(${75 + index * 60}, ${192 - index * 30}, 192, 0.6)`,
                borderColor: `rgba(${75 + index * 60}, ${192 - index * 30}, 192, 1)`,
              })),
            }} options={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Real-time Updates' },
              },
            }} />
          ) : (
            <p>No real-time data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsDashboard;
