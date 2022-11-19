import React from 'react'
import './UserHome.css'
// import { useSelector } from 'react-redux'
const Username = localStorage.getItem("userDetails")
const Useremail = localStorage.getItem("userEmail")

function UserHome() {
    return (
        <div>

            <div className="profile-wrap">
                <div class="mt-4">
                    <div
                        class="col"
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <h2 style={{ color: "black" }}>PROFILE</h2>
                     
                        <h2> &#160;</h2>
                    </div>
                </div>

                <div className="Profile_photo">
                    <img
                        src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg?w=2000"
                        alt=""
                    />
                </div>
                <div className="user_data">
                    <p>{Username ? Username : " "}</p>
                    <p>{Useremail ? Useremail : ""}</p>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    padding: "30px",
                }}
            >

            </div>

        </div>
    )
}

export default UserHome
