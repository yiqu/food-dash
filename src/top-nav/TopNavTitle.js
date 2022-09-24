import React from "react";

const TopNavTitle = (props) => {

  return (
    <div className="poppins fs-25 font-weight-bold app-title">
      { props.display }
    </div>
  );
};

export default TopNavTitle;