import { Outlet } from "react-router";
import { AuthProvider } from "../context/AuthProvider";

export const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
