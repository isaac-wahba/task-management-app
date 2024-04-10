import "./StatusToggle.scss";

interface StatusToggleProps {
  status: "completed" | "pending";
  onToggle: () => void;
}

const StatusToggle: React.FC<StatusToggleProps> = ({ status, onToggle }) => {
  return (
    <div className="status-toggle" onClick={onToggle}>
      {status === "completed" ? "Mark as Pending" : "Mark as Completed"}
    </div>
  );
};

export default StatusToggle;
