// src/utils/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with actual backend URL
  headers: { 'Content-Type': 'application/json' },
});

export default apiClient;
