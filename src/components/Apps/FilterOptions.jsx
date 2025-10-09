import useFilter from "../../hooks/useFilter";
const FilterOptions = ({ appsLength = 0 }) => {
  const { searchText, handleSetSearchText } = useFilter();

  return (
    <div className="flex justify-between items-center">
      <p className="text-2xl font-semibold">({appsLength}) Apps Found</p>
      <label className="input bg-transparent">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow placeholder:text-gray-500"
          placeholder="Search"
          value={searchText}
          onChange={(e) => handleSetSearchText(e.target.value)}
        />
      </label>
    </div>
  );
};

export default FilterOptions;
