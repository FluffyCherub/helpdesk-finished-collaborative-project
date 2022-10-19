import React from "react";
import HelpdeskOrganism from "./organisms/HelpdeskOrganism";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-1">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Helpdesk
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <HelpdeskOrganism button="" placeholder="Search" aria-label="Search" />
      </div>
    </nav>
  );
};

export default Header;
