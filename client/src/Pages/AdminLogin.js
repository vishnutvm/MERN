import React, { useEffect } from 'react'
import { AdminSingup} from '../Components'
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'

function AdminLogin() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {

            const user = jwt(token);

            if (user) {
                navigate('/adminHome');
            }
        } else {
            navigate('/admin');
        }
    }, [navigate])
    return (
        <div>
            <AdminSingup />
        </div>
    )
}

export default AdminLogin
