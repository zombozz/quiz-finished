import {createSlice} from "@reduxjs/toolkit"

export const goToQuestionSlice = createSlice({
    name: "goToQuestionNumber",
    initialState: {
        goToQNum: 0
    },
    reducers: {
        setGoToQ: (state, action) => {
            state.goToQNum = action.payload;
        }
    }
});

export const {setGoToQ} = goToQuestionSlice.actions

export default goToQuestionSlice.reducer;