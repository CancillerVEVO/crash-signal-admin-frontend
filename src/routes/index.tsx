import { createBrowserRouter } from "react-router-dom";
import { MainPage, AlertsPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/alerts",
    element: <AlertsPage />,
  },
]);

export { router };
