import "./TextArea.scss";

interface TextAreaProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      className="textarea"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default TextArea;
