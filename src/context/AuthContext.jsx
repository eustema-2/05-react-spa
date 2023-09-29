import { createContext, useContext, useState } from "react";
import auth from "../api/auth";
import storage from "../utils/storage";

// creo il contesto globale
const AuthContext = createContext();

// creo il provider per trasmettere i valori ai componenti figli
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const accessToken = storage.getItem("accessToken");
    if (accessToken) return true;
    return false;
  });
  const [user, setUser] = useState(() => {
    return storage.getItem("user") || null;
  });

  function setUserData(data) {
    const { accessToken, user: userData } = data;
    // persistenza lato browser
    storage.setItem("accessToken", accessToken);
    storage.setItem("user", userData);
    setUser(userData);
    setIsLoggedIn(true);
  }

  async function handleLogin(payload) {
    const data = await auth.login(payload);
    setUserData(data);
  }

  function handleLogout() {
    storage.removeItem("accessToken");
    storage.removeItem("user");
    setIsLoggedIn(false);
  }

  async function handleCreateAccount(payload) {
    const data = await auth.create(payload);
    setUserData(data);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        handleLogin,
        handleLogout,
        handleCreateAccount,
      }}
    >
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
