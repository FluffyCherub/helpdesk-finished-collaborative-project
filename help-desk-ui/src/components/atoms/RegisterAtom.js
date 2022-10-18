import React from 'react'

const RegisterAtom = (props) => {
    const {register} = props;
  return (
    <div className="nav-item">
    <div className="nav-link" aria-current="page" href="#"><i className="fa fa-plus fa-fw" aria-hidden="true"></i>Register
        {register}
    </div>
</div>
  )
}

export default RegisterAtom