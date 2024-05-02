import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/api', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMenstrualCycleData = async (userId) => {
  try {
    const response = await apiClient.get(`/menstrual-cycle/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addMenstrualCycleData = async (userId, data) => {
  try {
    const response = await apiClient.post(`/menstrual-cycle/${userId}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOvulationPredictions = async (userId) => {
  try {
    const response = await apiClient.get(`/ovulation-prediction/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPregnancyTracking = async (userId) => {
  try {
    const response = await apiClient.get(`/pregnancy-tracking/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPersonalizedRecommendations = async (userId) => {
  try {
    const response = await apiClient.get(`/personalized-recommendations/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
