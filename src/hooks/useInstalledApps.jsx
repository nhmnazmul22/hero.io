import { useContext } from "react";
import InstalledContext from "../context/InstalledAppContext";

const useInstalledApps = () => {
  const context = useContext(InstalledContext);

  if (!context) {
    throw new Error(
      "useInstalledApps must be used within a InstalledContextProvider"
    );
  }

  const { apps, handleAddApps, loading, handleRemoveApp } = context;

  return { apps, handleAddApps, loading, handleRemoveApp };
};

export default useInstalledApps;
