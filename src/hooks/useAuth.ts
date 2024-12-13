import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuthContext must be used within AuthProvider");
  return context;
};
