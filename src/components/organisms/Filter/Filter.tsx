import "./Filter.scss";
import { FilterOptions } from "../../../hooks/useTaskFilter";

interface FilterProps {
  selectedFilter: FilterOptions;
  onSelectFilter: (filter: FilterOptions) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedFilter, onSelectFilter }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectFilter(e.target.value as FilterOptions);
  };

  return (
    <div className="filter">
      <select value={selectedFilter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default Filter;
