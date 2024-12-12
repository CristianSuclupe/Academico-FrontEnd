import { PropsWithChildren } from "react";
import { IUser } from "./user";

export interface IAuthContext {
  authToken?: string | null;
  currentUser?: IUser | null;
  error?: string | null;
  openModalError: boolean;
  setOpenModalError: (value: boolean) => void;
  handleLogin: (data: IAuth) => Promise<void>;
  handleLogout?: () => Promise<void>;
}

export type AuthProviderProps = PropsWithChildren;
