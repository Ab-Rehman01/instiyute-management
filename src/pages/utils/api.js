// src/utils/api.js
import axios from 'axios';

// Create an instance of axios with base URL for API requests
const api = axios.create({
  baseURL: 'https://your-api-url.com', // Change this to your actual API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example function to fetch data from an endpoint
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Example function to send data to an endpoint
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
