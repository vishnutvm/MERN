import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'
import AdminUserinfo from './AdminUserinfo';



function AdminHome() {
    const navigate = useNavigate();
    useEffect(() => {

        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt(token);

            if (!user) {
                localStorage.removeItem('token')
                navigate('/admin');
            }
        } else {
            navigate('/admin');
        }
    }, [navigate])
    return (
        <div>
    
           <AdminUserinfo/>
        </div>
    )
}

export default AdminHome
