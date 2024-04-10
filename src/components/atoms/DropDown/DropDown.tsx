import Select from "react-select";
import { ReactNode } from "react";
import "./DropDown.scss";
type Option = { value: string; label: ReactNode };

interface DropDownProps {
  selectedOption: Option;
  onSelect: (option: Option) => void;

  options: Option[];
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
