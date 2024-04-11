import "./Filter.scss";
import { filterOptions } from "../../../constants/constants";
import DropDown from "../../atoms/DropDown/DropDown";
import { ReactNode } from "react";
import { TASK_STATUS } from "../../../enums/common";

interface FilterProps {
  selectedFilter: TASK_STATUS;
  onSelectFilter: (filter: TASK_STATUS) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedFilter, onSelectFilter }) => {
  return (
    <div className="filter-container">
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
