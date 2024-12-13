import { createBrowserRouter } from "react-router";
import { routes } from "./routes";
import Login from "../pages/Login";
import { AuthLayout } from "../layout/AuthLayout";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: routes.LOGIN,
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: routes.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/a",
        element: <div>prueba</div>,
      },
    ],
  },
]);

export default router;
