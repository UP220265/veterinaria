import { createContext, useContext, useState } from "react";
import { usuariosFake } from "../data/usuarios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuarioActual, setUsuarioActual] = useState(null);

  const login = (usuario, contraseña) => {
    const encontrado = usuariosFake.find(u => u.usuario === usuario && u.contraseña === contraseña);
    if (encontrado) {
      setUsuarioActual(encontrado);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUsuarioActual(null);
  };

  return (
    <AuthContext.Provider value={{ usuarioActual, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
