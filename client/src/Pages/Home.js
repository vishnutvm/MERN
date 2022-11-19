import React, { useEffect } from 'react'
import { UserNav } from '../Components'
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'
import UserHome from '../Components/UserHome/UserHome';



function Home() {


    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {

            const user = jwt(token);


            // setUserName(user.name);

            if (!user) {
                localStorage.removeItem('token')
                navigate('/');
            } else {
                // populateQuote()
            }
        } else {
            navigate('/');
        }
    }, [navigate])

    return (
        <div>
            <UserNav />
            <UserHome/>
        </div>
    )
}

export default Home
