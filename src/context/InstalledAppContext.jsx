import { createContext, useEffect, useState } from "react";
import { getData } from "../utilities/storage";
import { fetchApps } from "../utilities/lib";

const InstalledContext = createContext(null);

export const InstalledContextProvider = ({ children }) => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddApps = (newAppData) => {
    setApps((prevApps) => [...prevApps, newAppData]);
  };

  const handleRemoveApp = (appId) => {
    const newApps = apps.filter((app) => app.id !== appId);
    setApps(newApps);
  };

  const handleFetchInstalledApps = async () => {
    setLoading(true);

    const installedAppsId = getData();
    const allApps = await fetchApps();
    const installedApps = [];

    if (installedAppsId.length > 0) {
      allApps.forEach((app) => {
        if (installedAppsId.includes(app.id)) {
          installedApps.push(app);
        }
      });
    }
    setApps(installedApps);
    setLoading(false);
  };

  useEffect(() => {
    handleFetchInstalledApps();
  }, []);

  return (
    <InstalledContext.Provider
      value={{ apps, loading, handleAddApps, handleRemoveApp }}
    >
      {children}
    </InstalledContext.Provider>
  );
};

export default InstalledContext;
