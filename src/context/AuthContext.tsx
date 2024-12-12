import { createContext, useState } from "react";
import { Auth } from "../api/auth";
import { AuthProviderProps, IAuthContext } from "../types/authContext";
// import { IUser } from "../types/user";
import { ILogin, ILoginResponse } from "../types/auth";
import { Token } from "../api/token";
import { ITokenPayload } from "../types/token";

const authController = new Auth();
const tokenController = new Token();
export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>();
  const [currentUser, setCurrentUser] = useState<ITokenPayload | null>();
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async (data: ILogin) => {
    try {
      const response: ILoginResponse = await authController.login(data);
      if (response.statusCode != 200) throw new Error(response.message);
      const { token } = response;
      if (!token) throw new Error("Token no recibido.");
      tokenController.setToken(token);
      setAuthToken(response.token);
      setCurrentUser(() => tokenController.getUser(token));
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "No se pudo iniciar sesión";
      setError(true);
      setErrorMessage(errorMessage);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        currentUser,
        handleLogin,
        errorMessage,
        error,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
