import { createContext, useState } from "react";

const initialValue = {
  searchText: "",
  handleSetSearchText: () => {},
};

const FilterContext = createContext(initialValue);

export const FilterContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const handleSetSearchText = (newText) => {
    setSearchText(newText);
  };

  return (
    <FilterContext.Provider value={{ searchText, handleSetSearchText }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
