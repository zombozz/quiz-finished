import {configureStore} from "@reduxjs/toolkit"
import correctAnswersReducer from "./correctAnswers"
import goToQuestionReducer from "./goToQuestion"
import isClickedReducer from "./isClicked"

export default configureStore({
    reducer: {
        correctAnswers: correctAnswersReducer,
        goToQuestion: goToQuestionReducer,
        isClicked: isClickedReducer
    }
})