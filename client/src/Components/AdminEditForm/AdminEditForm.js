import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function AdminEditForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [name, setname] = useState('')
  const { alldetails } = useSelector((state) => state.details)

  console.log(alldetails[0]);
  useEffect(() => {
    setname(alldetails[0]?.name)
    setEmail(alldetails[0]?.email)
  }, [alldetails])



  async function editUser(event) {
    event.preventDefault()
    console.log("started verifing");
    const responce = await fetch('http://localhost:3001/admin/api/editUser', {
      method: 'POST',
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: alldetails[0]._id,
        email,
        name
      }),
    })
    const data = await responce.json()

    if (data.status === 'ok') {

      navigate('/userinfo');
    } else {
      alert("error")
    }
  }



  return (
    <div className='container'>
      <form onSubmit={editUser}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Name</label>
          <input className="form-control" value={name} onChange={(e) => { setname(e.target.value) }} />

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Email</label>
          <input className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AdminEditForm