import React, {useState , useEffect} from 'react'

export default function Registerscreen() {
  const[name, setname] = useState('')
  const[email, setemail] = useState('')
  const[password, setpassword] = useState('')
  return (
    <div>
        <div className="row justify-content-center mt-5">
          <div className = "col-md-5 mt-5">
            <h2 className="text-center m-2" style={{fontSize:'35px'}}>Register</h2>
            <div>
              <input type="text" placeholder="name" className="form-control"/>
              <input type="text" placeholder="email" className="form-control"/>
              <input type="text" placeholder="password" className="form-control"/>
              <input type="text" placeholder="confirm password" className="form-control"/>
              <div style={{ textAlign: 'left' }}>
                   <button className="btn mt-3">REGISTER</button>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}
