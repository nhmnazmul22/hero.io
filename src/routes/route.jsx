import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";
import NotFound from "../pages/Errors/NotFound";
import { FilterContextProvider } from "../context/FilterContext";
import AppsPage from "../pages/Apps/Apps";

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
        element: (
          <FilterContextProvider>
            <AppsPage></AppsPage>
          </FilterContextProvider>
        ),
        loader: () => fetch("/data/apps.json"),
      },
      {
        path: "/app/:id",
        Component: AppDetails,
        loader: () => fetch("/data/apps.json"),
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
