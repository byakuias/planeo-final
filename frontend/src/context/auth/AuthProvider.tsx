import { useState, ReactNode, useEffect } from "react";
import { LoginData } from "../../types/types";
import {
  checkSession,
  loginService,
  logoutService,
} from "../../services/authService";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";


const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  // const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkSession()
      .then((data) => {
        console.log(data)
        setIsAuthenticated(true);
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  const login = (data: LoginData): Promise<void> => {
   return loginService(data)
      .then(() => setIsAuthenticated(true))
      .catch((error) => {
        alert(error.message || "Error al iniciar sesión");
        throw error; 
      });
  };

  const logout = () => {
    logoutService()
      .then(() => {setIsAuthenticated(false); checkSession()})
      .catch((error) => {
        alert(error.message || "Error al cerrar sesión");
      });
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
