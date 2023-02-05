import {createSlice} from "@reduxjs/toolkit"

export const questionClickedSlice = createSlice({
    name: "clicked",
    initialState: {
        clicked: false
    },
    reducers: {
        clickedTrue: (state, action) => {
            state.clicked = action.payload;
        },
        clickedFalse: (state, action) => {
            state.clicked = action.payload;
        }
    }
});

export const {clickedTrue, clickedFalse} = questionClickedSlice.actions

export default questionClickedSlice.reducer;