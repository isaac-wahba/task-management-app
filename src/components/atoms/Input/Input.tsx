import "./Input.scss";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      className="input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
