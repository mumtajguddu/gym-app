import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Initialize auth state from localStorage
    try {
      const storedUser = localStorage.getItem("gymUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch {
      // Ignore errors in parsing localStorage
    }
  }, []);

  const login = (userData, rememberMe = false) => {
    setUser(userData);
    if (rememberMe) {
      try {
        localStorage.setItem("gymUser", JSON.stringify(userData));
      } catch {
        // Ignore localStorage errors silently
      }
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("gymUser");
    } catch {
      // Ignore
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
