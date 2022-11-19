import React, { useEffect } from 'react'
import { LoginForm} from '../Components'
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'


function Login() {

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {

            const user = jwt(token);
      
            // console.log(user);
            // console.log(token);
            if (user) {
                navigate('/userHome');
            }
        } else {
            navigate('/');
        }
    }, [navigate])
    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default Login
