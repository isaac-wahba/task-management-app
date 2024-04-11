import { Link } from "react-router-dom";
import ViewDetails from "../../../assets/icons/view-details.svg";
interface ViewDetailsActionProps {
  link: string;
}

const ViewTaskDetailsAction: React.FC<ViewDetailsActionProps> = ({ link }) => {
  return (
    <Link to={link}>
      <img
        src={ViewDetails}
        alt="view details"
        title="View Details"
        width={22}
        height={22}
        style={{ cursor: "pointer" }}
      />
    </Link>
  );
};

export default ViewTaskDetailsAction;
