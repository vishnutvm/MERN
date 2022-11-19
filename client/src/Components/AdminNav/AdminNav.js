import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./AdminNav.css"
function AdminNav() {

    const { userDeatils } = useSelector((state) => state.user)
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userDetails')
        navigate('/admin')
    }

    return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/adminHome">MERN</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                    </div>

                    <ul className="navbar-nav">
                        <li className="nav-item d-flex">

                            <span className="nav-link username" style={{ color: "white" }} ><b><i>
                                {userDeatils ? <span>{userDeatils} </span> : " "}
                            </i></b></span>
                            <span className="nav-link logout_user_btn" onClick={logout}>Logout</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default AdminNav
