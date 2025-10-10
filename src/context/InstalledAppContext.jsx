import { createContext, useState } from "react";

const InstalledContext = createContext(null);

export const InstalledContextProvider = ({ children }) => {
  const [apps, setApps] = useState([]);

  const handleAddApps = (newAppData) => {
    setApps((prevApps) => [...prevApps, newAppData]);
  };

  return (
    <InstalledContext.Provider value={{ apps, handleAddApps }}>
      {children}
    </InstalledContext.Provider>
  );
};

export default InstalledContext;
