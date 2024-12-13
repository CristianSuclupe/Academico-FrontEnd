import { useEffect, useState } from "react";
import { Auth } from "../api/auth";
import { Token } from "../api/token";
import { AuthContext } from "./authContext";
import { useLocation, useNavigate } from "react-router";
import { AuthProviderProps } from "../types/authContext";
import { ILogin, ILoginResponse } from "../types/auth";
import { ITokenPayload } from "../types/token";
import { routes } from "../router/routes";

const authController = new Auth();
const tokenController = new Token();

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>();
  const [currentUser, setCurrentUser] = useState<ITokenPayload | null>();
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function checkLogin() {
      const token = await tokenController.getToken();
      if (!token || tokenController.hasExpired(token)) {
        handleLogout();
        return;
      }
      if (location.pathname === routes.LOGIN) navigate(routes.HOME);
      return;
    }
    checkLogin();
  }, []);

  const handleLogin = async (data: ILogin) => {
    try {
      const response: ILoginResponse = await authController.login(data);
      const { statusCode, token, message } = response;
      if (statusCode != 200) throw new Error(message);
      if (!token) throw new Error("Token no recibido.");
      tokenController.setToken(token);
      setAuthToken(token);
      setCurrentUser(() => tokenController.getUser(token));
      navigate(routes.HOME);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "No se pudo iniciar sesión";
      setError(true);
      setErrorMessage(errorMessage);
    }
  };

  const handleLogout = () => {
    tokenController.removeToken();
    setAuthToken(null);
    setCurrentUser(null);
    navigate(routes.LOGIN);
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        currentUser,
        errorMessage,
        error,
        setError,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
