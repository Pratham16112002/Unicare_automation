import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tools : [ "Coupling" , "MCB", "Fuji Parts", "Grease" ]
}
 

const toolSlice = createSlice({
    name: "tool",
    initialState,
    reducers: {}
})

export const selectTools = state => state.tool.tools

export default toolSlice.reducer;