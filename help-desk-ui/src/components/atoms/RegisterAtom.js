import React from 'react'

const RegisterAtom = (props) => {
    const {register} = props;
  return (
    <div className="nav-item">
    <register className="nav-link" aria-current="page" href="#"><i className="fa fa-plus fa-fw" aria-hidden="true"></i>Register
        {register}
    </register>
</div>
  )
}

export default RegisterAtom