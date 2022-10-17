import React from 'react'

const TitleAtom = (props) => {
    const {title,button} = props;
  return (
    <div class="container-fluid">
    <title className="navbar-brand" href="#">Student Portal
        {title}
    </title>
    <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        
      </div>
    </div>
  )
}

export default TitleAtom