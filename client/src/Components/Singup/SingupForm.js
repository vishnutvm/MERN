import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Singup/Singup.css'
function Singup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const navigate = useNavigate();
  const [dataErr, setDataErr] = useState('')

  async function registerUser(event) {
    event.preventDefault()
    const responce = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    })
    const data = await responce.json()
    console.log(data);

    if (data.status === 'error') {
      setDataErr(data)
    } else {
      navigate('/');

    }
  }

  return (
    <div>
      <section className='signUpForm' >
        <div className="container h-100">
          <div className="inercontainer row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome</p>

                      {dataErr ? <p style={{ color: "red" }} className="text-center  fw-bold ">{dataErr.status}</p> : " "}
                      <form className="mx-1 mx-md-4" onSubmit={registerUser}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              value={name}
                              onChange={(e) => { setName(e.target.value) }}
                              type="text"
                              id="form3Example1c"
                              className="form-control" />
                            <label className="form-label" >Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" value={email}
                              onChange={(e) => { setEmail(e.target.value) }} />
                            <label className="form-label">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" value={password}
                              onChange={(e) => { setPassword(e.target.value) }} />
                            <label className="form-label" >Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" className="form-control" value={cPassword}
                              onChange={(e) => { setCPassword(e.target.value) }} />
                            <label className="form-label" >Repeat your password</label>
                          </div>
                        </div>

                   

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="Submit" className="btn btn-primary btn-lg">Register</button>
                        </div>

                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Singup