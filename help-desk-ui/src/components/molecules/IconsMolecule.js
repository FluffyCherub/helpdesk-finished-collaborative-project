import React from 'react'
import RegisterAtom from '../atoms/RegisterAtom'
import HomeAtom from '../atoms/HomeAtom'
import AboutAtom from '../atoms/AboutAtom'

function IconsMolecule (props)  {
   const {icon} = props;
return(
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <HomeAtom/>
    <RegisterAtom/>
    <AboutAtom/>
    {icon}
    </ul>
   
)
}
export default IconsMolecule