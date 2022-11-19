import { createSlice } from '@reduxjs/toolkit'



const INITIAL_STATE = {
    alldetails: [],

}


const detailsSlice = createSlice({
    name: "details",
    initialState: INITIAL_STATE,
    reducers: {
        addUserDetails: (state, action) => {
            state.alldetails = []
            state.alldetails.push(action.payload);

        }
    }

})

export const { addUserDetails } = detailsSlice.actions;
//reducer export to a store 
export default detailsSlice.reducer;