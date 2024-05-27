// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';

export const fetchTransportModes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/transportmodes/modes`);
    return response.data.modes;
  } catch (error) {
    console.error("Error fetching transport modes:", error);
    throw error;
  }
};

export const fetchTransportFeed = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/transportmodes/feed`);
    return response.data;
  } catch (error) {
    console.error("Error fetching transport feed:", error);
    throw error;
  }
};
