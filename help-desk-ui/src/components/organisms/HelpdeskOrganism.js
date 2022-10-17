import React from 'react'
import IconsMolecule from '../molecules/IconsMolecule';
import NavbarMolecule from '../molecules/NavbarMolecule';

 function HelpdeskOrganism (props) {
    const {placeholder} = props;
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <IconsMolecule/>
        <NavbarMolecule
        placeholder={placeholder}
        aria-label="Search"
        />
        </div> 
      )
    }
export default HelpdeskOrganism
