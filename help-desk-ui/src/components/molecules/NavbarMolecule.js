import React from 'react'
import ButtonAtom from '../atoms/ButtonAtom'
import InputAtom from '../atoms/InputAtom'

function NavbarMolecule (props)  {
   const {placeholder,button} = props;
return(
    <div className="d-flex">
    <ButtonAtom button={button}/>
    <InputAtom
    className="form-control me-2"
    placeholder={placeholder} 
    aria-label="Search"
    />
    </div>
)
}
export default NavbarMolecule