import "./Button.scss";

interface ButtonProps {
  onClick: () => void;
  primaryColor?: string;
  hoverColor?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  primaryColor,
  hoverColor,
}) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={
        {
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
