import React from 'react'

const HomeAtom = (props) => {
    const {home} = props;
  return (
    <div className="nav-item">
    <home className="nav-link" aria-current="page" href="#"><i className="fa fa-home fa-fw" aria-hidden="true"></i>Home
        {home}
    </home>
</div>
  )
}

export default HomeAtom