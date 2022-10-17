import React from 'react'

const ButtonAtom = (props) => {
    const {button} = props;
  return (
    <button className="btn btn-outline-success" type="submit">Submit
        {button}
    </button>
  );
};

export default ButtonAtom