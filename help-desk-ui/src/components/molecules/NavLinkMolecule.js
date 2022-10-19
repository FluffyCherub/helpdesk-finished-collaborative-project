import React from "react";
import IconAtom from "../atoms/IconAtom";
import NavLinkAtom from "../atoms/NavLinkAtom";

const NavLinkMolecule = (props) => {
  const { icon, text, href, className } = props;
  return (
    <React.Fragment>
      <IconAtom className="text-light" icon={icon} />
      <NavLinkAtom className={className} text={text} href={href} />
    </React.Fragment>
  );
};

export default NavLinkMolecule;
