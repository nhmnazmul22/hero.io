import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";
import NotFound from "../pages/Errors/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/data/apps.json"),
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/app/:id",
        Component: AppDetails,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
