import React from "react";

const Mailto = ({ email, subject, body, className, ...props }) => {
  return (
    <a
      className={className}
      href={`mailto:${email}?subject:${subject || ""}&body:${body || ""}`}
    >
      {props.children}
    </a>
  );
};

export default Mailto;
