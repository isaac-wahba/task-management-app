import Select from "react-select";
import "./Filter.scss";
import { FilterOptions } from "../../../hooks/useTaskFilter";
import { filterOptions } from "../../../constants/constants";

interface FilterProps {
  selectedFilter: FilterOptions;
  onSelectFilter: (filter: FilterOptions) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedFilter, onSelectFilter }) => {
  return (
    <div className="filter-container">
      <Select
        value={filterOptions.find((option) => option.value === selectedFilter)}
        onChange={(option: any) => onSelectFilter(option.value)}
        options={filterOptions}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default Filter;
