import { createContext, useEffect, useState } from "react";
import { getData } from "../utilities/storage";
import { useLoaderData } from "react-router";

const InstalledContext = createContext(null);

export const InstalledContextProvider = ({ children }) => {
  const appsData = useLoaderData();
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddApps = (newAppData) => {
    setApps((prevApps) => [...prevApps, newAppData]);
  };

  const handleRemoveApp = (appId) => {
    const newApps = apps.filter((app) => app.id !== appId);
    setApps(newApps);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const installedAppsId = getData();
      const installedApps = [];

      if (installedAppsId.length > 0) {
        appsData.forEach((app) => {
          if (installedAppsId.includes(app.id)) {
            installedApps.push(app);
          }
        });
      }
      setApps(installedApps);
      setLoading(false);
    })();
  }, [appsData]);

  return (
    <InstalledContext.Provider
      value={{ apps, loading, handleAddApps, handleRemoveApp }}
    >
      {children}
    </InstalledContext.Provider>
  );
};

export default InstalledContext;
