import { Outlet } from "react-router";
import { AuthProvider } from "../context/AuthProvider";

export const MainLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
