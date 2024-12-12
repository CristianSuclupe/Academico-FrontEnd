import { createContext } from "react";
import { Auth } from "../api/auth";
import { AuthProviderProps, IAuthContext } from "../types/authContext";
// import { IUser } from "../types/user";
import { ILogin } from "../types/auth";

const auth = new Auth();
export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  //   const [authToken, setAuthToken] = useState<string | null>();
  //   const [currentUser, setCurrentUser] = useState<IUser | null>();

  const handleLogin = async (data: ILogin) => {
    try {
      const response = await auth.login(data);
      console.log(response);
    } catch {
      throw new Error();
    }
  };
  return (
    <AuthContext.Provider value={{ handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
