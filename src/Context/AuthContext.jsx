/* eslint-disable no-unused-vars */
import { createContext, useState, useContext, useEffect } from 'react';
import AuthService from '../Components/Services/AuthService'

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);
  const login = async (email, password) => {
    try {
        const user =  AuthService.login(email, password);
        setCurrentUser(user.username);
    } catch (error) {
        console.error("Failed to login", error);
    }
  };
  const register = async (firstName, lastName, email, password) => {
    try {
      const user = await AuthService.register(firstName, lastName, email, password);
      setCurrentUser(user.username);
    } catch (error) {
      console.error("Failed to register", error);
    }
  };
  const logout = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser,login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
