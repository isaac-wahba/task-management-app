import DeleteIcon from "../../../assets/icons/delete.svg";
interface DeleteStatusActionProps {
  onClick: () => void;
}

const DeleteTaskAction: React.FC<DeleteStatusActionProps> = ({ onClick }) => {
  return (
    <>
      <img
        src={DeleteIcon}
        alt="delete"
        title="Delete task"
        onClick={onClick}
        width={18}
        height={18}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default DeleteTaskAction;
