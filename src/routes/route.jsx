import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";
import NotFound from "../pages/Errors/NotFound";
import { FilterContextProvider } from "../context/FilterContext";
import AppsPage from "../pages/Apps/Apps";
import { InstalledContextProvider } from "../context/InstalledAppContext";

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
        element: (
          <InstalledContextProvider>
            <AppDetails></AppDetails>
          </InstalledContextProvider>
        ),
        loader: () => fetch("/data/apps.json"),
      },
      {
        path: "/installation",
        element: (
          <InstalledContextProvider>
            <Installation></Installation>
          </InstalledContextProvider>
        ),
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
