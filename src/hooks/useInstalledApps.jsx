import { useContext } from "react";
import InstalledContext from "../context/InstalledAppContext";

const useInstalledApps = () => {
  const context = useContext(InstalledContext);

  if (!context) {
    throw new Error(
      "useInstalledApps must be used within a InstalledContextProvider"
    );
  }

  const { apps, handleAddApps, loading } = context;

  return { apps, handleAddApps, loading };
};

export default useInstalledApps;
