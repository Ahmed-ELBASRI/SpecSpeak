import axios from 'axios';

const API_URL = "http://localhost:8080/auth"; 
const login = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:8080/auth/login`, {
      email,
      password
  });

    // Store JWT token in local storage
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    if (response.data.userName) {
      localStorage.setItem("username", response.data.userName);
    }

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Register service
const register = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      firstName,
      lastName,
      email,
      password,
    });

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    if (response.data.userName) {
      localStorage.setItem("username", response.data.userName);
    }

    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// Logout service
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");

};

const getCurrentUser = () => {
  return localStorage.getItem("username");
};

const AuthService = {
  login,
  register,
  logout,
  getCurrentUser,
};

export default AuthService;
