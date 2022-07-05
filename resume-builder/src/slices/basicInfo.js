import { createSlice } from '@reduxjs/toolkit'
export const basicInfo = createSlice({
    name: "basic",
    initialState: {
        user: null,
        basicInfo: null
    },
    reducers: {
        setBasicInfo: (state, action) => {
            console.log("setting state.basicInfo to :", action.payload)
            state.basicInfo = action.payload
        }
    }
})
export const { setBasicInfo } = basicInfo.actions
export default basicInfo.reducer