import { createBrowserRouter } from "react-router";
import { routes } from "./routes";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: routes.LOGIN,
    element: <Login />,
  },
]);

export default router;
