import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { Login, Home } from "../pages";

export const router = createBrowserRouter([
  {
    path: routes.Login,
    element: <Login />,
  },
  {
    path: routes.Home,
    element: <Home />,
    children: [
      {
        index: true,
      },
    ],
  },
]);
