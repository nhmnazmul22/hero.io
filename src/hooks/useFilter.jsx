import { useContext } from "react";
import FilterContext from "../context/FilterContext";

const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  const { searchText, handleSetSearchText } = context;

  return { searchText, handleSetSearchText };
};

export default useFilter;
