import { createContext } from "react";
import { IAuthContext } from "../types/authContext";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);
