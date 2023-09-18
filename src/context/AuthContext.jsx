import { createContext, useContext, useState } from "react";

// creo il contesto globale
const AuthContext = createContext();

// creo il provider per trasmettere i valori ai componenti figli
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(payload) {
    if (
      payload.email === "samuele.madrigali@gmail.com" &&
      payload.password === "password"
    ) {
      setIsLoggedIn(true);
    } else {
      throw new Error("Login incorrect!");
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

// creo un hook per il recupero di questi valori
function useAuth() {
  return useContext(AuthContext);
}

// esporto queste due funzioni
export { AuthProvider, useAuth };
