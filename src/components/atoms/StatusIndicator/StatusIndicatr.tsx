import "./StatusIndicator.scss";

interface StatusIndicatorProps {
  status: "completed" | "pending";
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  return <div className={`status-indicator ${status}`}></div>;
};

export default StatusIndicator;
