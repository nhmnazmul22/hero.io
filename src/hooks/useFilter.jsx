import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  const { searchText, handleSetSearchText, type, handleSetType } = context;

  return { searchText, handleSetSearchText, type, handleSetType };
};

export default useFilter;
