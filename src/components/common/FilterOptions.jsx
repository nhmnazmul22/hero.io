import useFilter from "../../hooks/useFilter";
const FilterOptions = ({ appsLength = 0, isInput }) => {
  const { searchText, handleSetSearchText, handleSetType } = useFilter();

  return (
    <div className="flex justify-between items-center">
      <p className="text-2xl font-semibold">({appsLength}) Apps Found</p>

      {isInput ? (
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
      ) : (
        <select
          onChange={(e) => handleSetType(e.target.value)}
          defaultValue=""
          className="select"
        >
          <option value="">Short By Downloads</option>
          <option value="high-low">High-Low</option>
          <option value="low-high">Low-High</option>
        </select>
      )}
    </div>
  );
};

export default FilterOptions;
