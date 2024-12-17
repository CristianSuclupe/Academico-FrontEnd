import { createBrowserRouter } from "react-router";
import { routes } from "./routes";
import Login from "../pages/Login";
import { AuthLayout } from "../layout/AuthLayout";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { GradeRegister } from "../pages/GradeRegister";

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
        path: routes.GRADEREGISTER,
        element: <GradeRegister />,
      },
    ],
  },
]);

export default router;
