import React from "react";

const IconAtom = (props) => {
  const { icon, onClick } = props;
  return <i className={icon} aria-hidden="true" onClick={onClick}></i>;
};

export default IconAtom;
