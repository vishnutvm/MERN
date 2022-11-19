import React, { useState } from 'react'
import "./loginform.css"
import { Link, useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'

function LoginForm() {
    const navigate = useNavigate();
    // const dispatach = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    async function loginUser(event) {
        event.preventDefault()
        console.log("started verifing");
        const responce = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                email,
                password
            }),
        })
        const data = await responce.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            const user = jwt(data.user);
            // console.log(user);
            localStorage.setItem('userDetails', user.name)
            localStorage.setItem('userEmail', user.email)
            navigate('/userHome');
        } else {
            setError('Invalid Email/Password..')
        }
    }

    return (
        <div>
            <section className='loginForm' >
                <div className=" container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form  onSubmit={loginUser}>
                                <div className="form divider d-flex align-items-center my-4">
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

                                </div>
                                {error ? <p style={{ color: "red" }} className="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">{error}</p> : " "}
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" value={email}
                                        onChange={(e) => { setEmail(e.target.value) }} className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label" >Email address</label>
                                </div>


                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                    <label className="form-label">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                          

                                </div>

                                <div className="text-center loginbtn_wrap text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn loginBtn btn-primary btn-lg"
                                      >Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/singup"
                                        className="link-danger">Register</Link></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div >

            </section >
        </div >

    )
}

export default LoginForm
