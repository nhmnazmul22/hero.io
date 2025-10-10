import { createContext, useEffect, useState } from "react";
import { getData } from "../utilities/storage";
import { fetchApps } from "../utilities/lib";

const InstalledContext = createContext(null);

export const InstalledContextProvider = ({ children }) => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAddApps = (newAppData) => {
    setApps((prevApps) => [...prevApps, newAppData]);
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
    <InstalledContext.Provider value={{ apps, loading, handleAddApps }}>
      {children}
    </InstalledContext.Provider>
  );
};

export default InstalledContext;
