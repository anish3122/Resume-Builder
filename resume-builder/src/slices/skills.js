import { createSlice } from '@reduxjs/toolkit'
export const skills = createSlice({
    name: "skills",
    initialState: {
        skills: []
    },
    reducers: {
        setSkills: (state, action) => {
            console.log("setting state.skills to :", action.payload)
            state.skills = action.payload
        }
    }
})
export const { setSkills } = skills.actions
export default skills.reducer