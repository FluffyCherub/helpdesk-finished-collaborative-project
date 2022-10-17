import React from 'react';

function InputAtom(props) {
    const {placeholder} =props;
  return(
<React.Fragment>
  <input 
  className="form-control me-2"
  placeholder={placeholder} 
  aria-label="Search"/>
  </React.Fragment>
  );
};

export default InputAtom