import React from 'react'

export default function Registerscreen() {
  return (
    <div>
        <div className="row justify-content-center mt-5">
          <div className = "col-md-5 mt-5">

            <div>
              <input type="text" placeholder="name" className="form-control"/>
              <input type="text" placeholder="email" className="form-control"/>
              <input type="text" placeholder="password" className="form-control"/>
              <input type="text" placeholder="confirm password" className="form-control"/>
            </div>
          </div>
        </div>
    </div>
  )
}
