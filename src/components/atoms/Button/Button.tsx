import "./Button.scss";

interface ButtonProps {
  onClick: () => void;
  primaryColor?: string;
  hoverColor?: string;
  children: React.ReactNode;
  additionalStyles?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  primaryColor,
  hoverColor,
  additionalStyles,
}) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={
        {
          ...additionalStyles,
          "--primary-color": primaryColor,
          "--hover-color": hoverColor,
        } as React.CSSProperties
      }
    >
      {children}
    </button>
  );
};

export default Button;
