import React from 'react'

const AboutAtom = (props) => {
    const {about} = props;
  return (
    <div className="nav-item">
    <about className="nav-link" aria-current="page" href="#"><i className="fa fa-question fa-fw" aria-hidden="true"></i>About Us
        {about}
    </about>
</div>
  )
}

export default AboutAtom