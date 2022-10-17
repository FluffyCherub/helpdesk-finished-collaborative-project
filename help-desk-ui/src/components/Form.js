import React from 'react'

const Form = () => {
  return (
    <div>  
        <div className='container '> 
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">@</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>



<label for="basic-url" className="form-label">Helpdesk</label>
<div className="input-group mb-3">
  <span className="input-group-text">With textarea</span>
  <textarea className="form-control" aria-label="With textarea"></textarea>
</div>
<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
</div>
    </div>
    </div>
  )
}
export default Form