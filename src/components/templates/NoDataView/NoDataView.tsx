import React from "react";
import "./NoDataView.scss";

interface NoDataViewProps {
  message: string;
}

const NoDataView: React.FC<NoDataViewProps> = ({ message }) => {
  return (
    <div className="no-data-view">
      <p>{message}</p>
    </div>
  );
};

export default NoDataView;
