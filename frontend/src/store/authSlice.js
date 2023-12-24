import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"authUser",
    initialState:[{
        id:1,
        name:"meriambs",
        email:"bensalah@gmail.com",
        password:"teste123.25",
        role:"admin"
    }],
    reducers:{
        setContacts:(state,action)=>{
            return action.payload
        }
    }
})

export const {setContacts} = authSlice.actions
export default authSlice.reducer