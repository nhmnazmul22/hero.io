import { createContext, useState } from "react";

const FilterContext = createContext(null);

export const FilterContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [type, setType] = useState("");

  const handleSetSearchText = (newText) => {
    setSearchText(newText);
  };

  const handleSetType = (type) => {
    setType(type);
  };

  return (
    <FilterContext.Provider
      value={{ searchText, handleSetSearchText, type, handleSetType }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
