import { createSlice } from '@reduxjs/toolkit'
export const education = createSlice({
    name: "education",
    initialState: {
        user: null,
        education: []
    },
    reducers: {
        setEducation: (state, action) => {
            console.log("setting state.education to :", action.payload)
            state.education = action.payload
        }
    }
})
export const { setEducation } = education.actions
export default education.reducer