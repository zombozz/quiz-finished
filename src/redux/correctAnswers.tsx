import {createSlice} from "@reduxjs/toolkit"

export const correctAnswersSlice = createSlice({
    name: "numberOfCorrectAnswers",
    initialState: {
        correctAnswerNum: [''],
    },
    reducers: {
        makeCorrect: (state, {payload}) => {
            state.correctAnswerNum[payload] = 'Correct';
        },
        makeIncorrect: (state, {payload}) => {
            state.correctAnswerNum[payload] = 'Incorrect';
        }, 
    }
});

export const {makeCorrect, makeIncorrect} = correctAnswersSlice.actions

export default correctAnswersSlice.reducer;