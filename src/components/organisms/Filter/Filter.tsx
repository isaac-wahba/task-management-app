import "./Filter.scss";
import { FilterOptions } from "../../../hooks/useTaskFilter";
import { filterOptions } from "../../../constants/constants";
import DropDown from "../../atoms/DropDown/DropDown";
import { ReactNode } from "react";

interface FilterProps {
  selectedFilter: FilterOptions;
  onSelectFilter: (filter: FilterOptions) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedFilter, onSelectFilter }) => {
  return (
    <div className="filter-container">
      {/* <Select
        value={filterOptions.find((option) => option.value === selectedFilter)}
        onChange={(option: any) => onSelectFilter(option.value)}
        options={filterOptions}
        className="react-select-container"
        classNamePrefix="react-select"
      /> */}

      <DropDown
        onSelect={(option: any) => onSelectFilter(option.value)}
        options={filterOptions}
        selectedOption={
          filterOptions.find(
            (option: { value: string; label: ReactNode }) =>
              option.value === selectedFilter
          ) ?? { value: "", label: null }
        }
      />
    </div>
  );
};

export default Filter;
