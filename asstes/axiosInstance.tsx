/* eslint-disable prettier/prettier */
// src/api/axiosInstance.js
import axios from 'axios';
import Config from 'react-native-config';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/user' || Config.API_URL, // Use proxy URL if defined, otherwise fallback to API URL
  headers: {
    // 'Content-Type': 'application/json',
  },
});

export default axiosInstance;
