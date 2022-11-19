import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'
import "./AdminLogin.css"
function AdminLogin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    async function loginUser(event) {
        event.preventDefault()
        console.log("started verifing");
        const responce = await fetch('http://localhost:3001/admin/api/login', {
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
            localStorage.setItem('userDetails', user.name)

            // dispatach(addUserDetails(user))

            //navigate('/userHome');
            navigate('/adminHome');
        } else {
            setError('Invalid Email/Password..')
        }
    }

    return (
        <div>
            <section className="loginForm mt-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center  align-items-center h-100">
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={loginUser}>
                                <div className="divider d-flex align-items-center justify-content-center my-4">
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-cetner">Admin</p>

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



                                <div className=" loginbtn_wrap text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn loginBtn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div >

            </section >
        </div >

    )
}

export default AdminLogin
