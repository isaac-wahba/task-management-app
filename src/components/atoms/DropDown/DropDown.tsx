import Select from "react-select";
import { ReactNode } from "react";
import "./DropDown.scss";
export type DropDownOption = { value: string; label: ReactNode };

interface DropDownProps {
  selectedOption: DropDownOption;
  onSelect: (option: DropDownOption) => void;
  options: DropDownOption[];
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <Select
      value={selectedOption}
      onChange={(newValue, actionMeta) =>
        onSelect(newValue || { value: "", label: null })
      }
      options={options}
      className="react-select-container"
      classNamePrefix="react-select"
    />
  );
};

export default DropDown;
