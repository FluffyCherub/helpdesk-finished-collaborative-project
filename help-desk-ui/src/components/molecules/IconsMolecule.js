import React from "react";
import NavLinkMolecule from "./NavLinkMolecule";

function IconsMolecule(props) {
  return (
    <React.Fragment>
      <NavLinkMolecule
        icon="fa fa-bars fa-fw"
        text="All Tickets"
        className="nav-item"
        href="/tickets"
      />
      <NavLinkMolecule
        icon="fa fa-wrench fa-fw"
        text="Engineer"
        className="nav-item"
        href="/engineer"
      />
      <NavLinkMolecule
        icon="fa fa-user-plus fa-fw"
        className="nav-item"
        text="Admin"
        href="/admin"
      />
      <NavLinkMolecule
        icon="fa fa fa-user fa-fw"
        className="nav-item"
        text="Client"
        href="/client"
      />
    </React.Fragment>
  );
}
export default IconsMolecule;
