import { useContext } from "react";
import InstalledContext from "../context/InstalledAppContext";

const useInstalledApps = () => {
  const context = useContext(InstalledContext);
  console.log(context);

  if (!context) {
    throw new Error(
      "useInstalledApps must be used within a InstalledContextProvider"
    );
  }

  const { apps, handleAddApps } = context;

  return { apps, handleAddApps };
};

export default useInstalledApps;
