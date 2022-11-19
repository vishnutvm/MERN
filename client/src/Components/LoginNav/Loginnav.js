import React from 'react'
import { Link } from 'react-router-dom'
import "./Loginnnav.css"

function loginNav() {
    return (
        <div>
            <nav className="navbar bg-secondary">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">MERN</Link>

                </div>
            </nav>
        </div>
    )
}

export default loginNav
