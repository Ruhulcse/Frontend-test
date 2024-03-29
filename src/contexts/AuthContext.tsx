import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { decryptData, encryptData } from "utils/encryptionData";

const AuthContext = createContext({
  user: null,
  setUser: (param: any) => {},
  token: null,
  loggedIn: false,
  login: (data: any) => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(
    JSON.parse(decryptData("user") as string) || null
    // JSON.parse(localStorage.getItem("user") as string) || null
  );

  const [token, setToken] = useState<any>(
    // localStorage.getItem("token") || null
    decryptData("token") || null
  );

  const loggedIn = !!user && !!token;

  useEffect(() => {
    localStorage.removeItem("user");
    encryptData("user", JSON.stringify(user));
    // localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (data: any) => {
    const { token, ...restData } = data;
    setToken(token);
    // localStorage.setItem("token", token);
    encryptData("token", token);
    setUser(restData);
    // localStorage.setItem("user", JSON.stringify(restData));
    encryptData("user", JSON.stringify(restData));
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setUser(null);
    localStorage.removeItem("user");
  };

  const setUserDis = (param: any) => {
    setUser(param);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, setUser: setUserDis, loggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
