import React from "react";

const SectionDivider = (props) => {
  return (
    <div className="section-divider">
      <p className="divider-text">{props.text}</p>
      {/* <div className="divider-shadow"></div> */}
    </div>
  );
};

export default SectionDivider;
