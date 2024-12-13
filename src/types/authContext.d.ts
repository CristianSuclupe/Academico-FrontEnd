import { PropsWithChildren } from "react";
export interface IAuthContext {
  authToken?: string | null;
  currentUser?: ITokenPayload | null;
  errorMessage?: string | null;
  error: boolean;
  setError: (value: boolean) => void;
  handleLogin: (data: IAuth) => Promise<void>;
  handleLogout: () => void;
}

export type AuthProviderProps = PropsWithChildren;
