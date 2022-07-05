import { createSlice } from '@reduxjs/toolkit'
export const workExperience = createSlice({
    name: "work",
    initialState: {
        workExperience: []
    },
    reducers: {
        setWorkExperience: (state, action) => {
            console.log("setting state.user to :", action.payload)
            state.workExperience = action.payload
        }
    }
})
export const { setWorkExperience } = workExperience.actions
export default workExperience.reducer