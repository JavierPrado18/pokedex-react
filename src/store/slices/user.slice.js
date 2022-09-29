import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'user',
    initialState: "Javier",
    reducers: {
        changeUser:(state,action)=>{
            return action.payload
        }
    }
})

export const { changeUser } = UserSlice.actions;

export default UserSlice.reducer;
