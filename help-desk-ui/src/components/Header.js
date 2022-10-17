import React from 'react'
import ButtonAtom from './atoms/ButtonAtom';
import HomeAtom from './atoms/HomeAtom';
import RegisterAtom from './atoms/RegisterAtom';
import AboutAtom from './atoms/AboutAtom';
import InputAtom from './atoms/InputAtom';
import NavbarMolecule from './molecules/NavbarMolecule';
import IconsMolecule from './molecules/IconsMolecule';
import HelpdeskOrganism from './organisms/HelpdeskOrganism';
import CardMolecule from './molecules/CardMolecule';
// import TitleAtom from './atoms/TitleAtom';

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-1">
        {/* <TitleAtom tile="title" />  */}
       <div class="container-fluid">
        <a class="navbar-brand" href="#">Helpdesk</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <HelpdeskOrganism
        button=""
        placeholder="Search"
        aria-label="Search"/>
    <CardMolecule/>
      </div>

  </nav>
    )
  }
  
  export default Header;