import { createSlice } from '@reduxjs/toolkit'
export const projects = createSlice({
    name: "projects",
    initialState: {
        projects: []
    },
    reducers: {
        setProjects: (state, action) => {
            console.log("setting state.user to :", action.payload)
            state.projects = action.payload
        }
    }
})
export const { setProjects } = projects.actions
export default projects.reducer