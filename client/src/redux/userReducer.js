import { createSlice } from '@reduxjs/toolkit'

const userInfoFromStorage = localStorage.getItem("userDetails")
console.log(userInfoFromStorage);

const INITIAL_STATE = {
    userDeatils: [userInfoFromStorage],
    
}


const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,

})


//reducer export to a store 
export default userSlice.reducer;