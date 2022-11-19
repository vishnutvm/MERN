import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'


//redux

import { useDispatch } from 'react-redux'
import { addUserDetails } from '../../redux/detailsREducer'

function DetailsOfUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [details, SetDetails] = useState([])

    async function getuserdetails() {
        console.log("iam here");
        const req = await fetch('http://localhost:3001/admin/api/userDetails', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const data = await req.json()

        if (data.status === 'ok') {
            SetDetails(data.userDetails)
        } else {
            alert(data.error)
        }
    }


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {

            const user = jwt(token);

            if (!user) {
                localStorage.removeItem('token')
                navigate('/admin');
            } else {
                getuserdetails()
            }
        } else {
            navigate('/admin');
        }
    }, [navigate])

    const deleteuser = async (id) => {

        const req = await fetch('http://localhost:3001/admin/api/delectUser', {
            method: "POST",
            headers: {
                'x-access-token': localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            }),
        })
        const data = await req.json()

        if (data.status === 'ok') {
            // SetDetails(data.userDetails)
            navigate('/adminHome')
        } else {
            alert(data.error)
        }
        console.log(id);

    }
    return (
        <div className='container'>
            <div>
                <table className="table">
                    <thead>
                        <tr className="">
                            <th scope="col">Slno</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((data, index) => {
                            return (
                                < tr  key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td><button onClick={() => { dispatch(addUserDetails(data)); navigate('/editUser') }} className="btn btn-primary" style={{marginRight:"10px"}} >Edit</button>
                                        <button className="btn btn-danger" onClick={() => deleteuser(data._id)}>Delect</button></td>
                                </tr>
                            )
                        })
                        }


                    </tbody>
                </table>
            </div>

        </div >


    )

}
export default DetailsOfUser
