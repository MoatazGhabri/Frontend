// /src/services/authService.js
import axios from 'axios';

// Base URL for the backend API
const API_URL = 'http://localhost:5000/api/auth';

/**
 * Sign up a user by sending user data (email, password) to the backend API.
 * 
 * @param {Object} userData - The user data containing email and password.
 * @returns {Promise} - Resolves with the API response data, rejects with an error.
 */
export const signup = (userData) => axios.post(`${API_URL}/signup`, userData);

/**
 * Sign in a user by sending user data (email, password) to the backend API.
 * 
 * @param {Object} userData - The user data containing email and password.
 * @returns {Promise} - Resolves with the API response data, rejects with an error.
 */
export const signin = (userData) => axios.post(`${API_URL}/signin`, userData);

/**
 * Request a password reset by sending the user's email to the backend API.
 * 
 * @param {string} email - The email of the user requesting a password reset.
 * @returns {Promise} - Resolves with the API response data, rejects with an error.
 */
export const forgotPassword = (email) => axios.post(`${API_URL}/forgot-password`, { email });
