import React, {useState, useEffect} from 'react'
import Progress from '../Progress/Progress'
import axios from  'axios'
import { useDispatch, useSelector } from "react-redux"
import isClicked, { clickedTrue } from '../../redux/isClicked'
import { correctAnswersSlice, makeCorrect, makeIncorrect } from '../../redux/correctAnswers'
import './Questions.css'
import Navbar from '../Nav/Navbar';

const Questions = () => {
    const [questionNumber, setQuestionNumber] = useState(1)
    const [res, setRes] = useState<any[]>([])
    const [currentQuestionQ, setCurrentQuestionQ] = useState("")
    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")
    const [answer4, setAnswer4] = useState("")
    const [buttonContents, setButtonContents] = useState("Next")
    const [answerSelected, setSelectedAnswer] = useState(false)
    const {goToQNum} = useSelector((state: any) => state.goToQuestion)
    const {clicked} = useSelector((state: any) => state.isClicked)


    useEffect(() => {
        axios.get('https://the-trivia-api.com/api/questions?categories=food_and_drink&limit=10&difficulty=easy&tags=food_and_drink')
        .then(results => {
            console.log(results)
            setRes(results.data)
            setCurrentQuestionQ(results.data[0].question)
            setAnswer1(results.data[0].incorrectAnswers[0])
            setAnswer2(results.data[0].correctAnswer)
            setAnswer3(results.data[0].incorrectAnswers[1])
            setAnswer4(results.data[0].incorrectAnswers[2])

        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const [randomNum, setRandomNum] = useState(1)
    const [randomNum1, setRandomNum1] = useState(1)
    const [randomNum2, setRandomNum2] = useState(3)
    const [randomNum3, setRandomNum3] = useState(2)
    const [randomNum4, setRandomNum4] = useState(0)

    const  {correctAnswerNum} = useSelector((state: any) => state.correctAnswers)
    const dispatch = useDispatch<any>()
    const [correctAnswerChosen, setCorrectAnswerChosen] = useState(false)
    const [questionsCompleted, setQuestionsCompleted] = useState(0)
    const [goToResults, setGoToResults] = useState(false)


    const nextQuestion = () => {
        localStorage.setItem("results", correctAnswerNum )
        if (answerSelected === true) {
            setSelectedAnswer(false)
            randomNumGen()
            setQuestionNumber(questionNumber+1)
            if (questionNumber <11) {
                if (correctAnswerChosen === true) {
                    dispatch(makeCorrect(questionNumber-1))
                    setCorrectAnswerChosen(false)
                } else
                if (correctAnswerChosen === false) {
                    dispatch(makeIncorrect(questionNumber-1))
                }
                localStorage.setItem("results", correctAnswerNum )
            }
            if (questionNumber <10) {
                setCurrentQuestionQ(res[questionNumber].question)
                setAnswer1(res[questionNumber].incorrectAnswers[0])
                setAnswer2(res[questionNumber].correctAnswer)
                setAnswer3(res[questionNumber].incorrectAnswers[1])
                setAnswer4(res[questionNumber].incorrectAnswers[2])
                setQuestionsCompleted(questionsCompleted + 1)
            }
            if (questionNumber > 8) {setButtonContents("Submit");}
            if (questionNumber > 9) {
                setQuestionNumber(10);
                setGoToResults(true)
            }
        }
    }

    useEffect(()=> {
        if (goToResults === true ) {
            localStorage.setItem("results", correctAnswerNum )
            window.location.pathname = '/Results'
        }
    })

    useEffect(() => {
        if (clicked == true) {
            console.log(correctAnswerNum)
            dispatch(clickedTrue(false))
            if (questionsCompleted >= goToQNum - 1) {
                setQuestionNumber(goToQNum)
                setCurrentQuestionQ(res[questionNumber -1].question)
                setAnswer1(res[questionNumber-1].incorrectAnswers[0])
                setAnswer2(res[questionNumber-1].correctAnswer)
                setAnswer3(res[questionNumber-1].incorrectAnswers[1])
                setAnswer4(res[questionNumber-1].incorrectAnswers[2])
            } else {alert("You cannot open a question that hasn't been completed yet.")}
        }
    })

    const allAnswers= [
        answer1,
        answer2,
        answer3,
        answer4
    ]
    const randomNumGen = () => {
        setRandomNum(Math.floor(Math.random() * 4))
        if (randomNum === 1) {
            setRandomNum1(1)
            setRandomNum2(2)
            setRandomNum3(0)
            setRandomNum4(3)
        } else if (randomNum === 0){
            setRandomNum1(0)
            setRandomNum2(1)
            setRandomNum3(3)
            setRandomNum4(2)
        }else if (randomNum === 2){
            setRandomNum1(2)
            setRandomNum2(3)
            setRandomNum3(1)
            setRandomNum4(0)
        }else if (randomNum === 3){
            setRandomNum1(3)
            setRandomNum2(0)
            setRandomNum3(2)
            setRandomNum4(1)
        }
    }
    const [itemSelected, setItemSelected] = useState(false)


    const checkCorrectAnswer1 = () => {
        setSelectedAnswer(true)
        if (randomNum1 ===1) {
            setCorrectAnswerChosen(true)
        } else if (randomNum1 != 1) {
            setCorrectAnswerChosen(false)
        }
    }

    const checkCorrectAnswer2 = () => {
        setSelectedAnswer(true)
        if (randomNum2 ===1) {
            setCorrectAnswerChosen(true)
        }else if (randomNum2 != 1) {
            setCorrectAnswerChosen(false)
        }
    }
    const checkCorrectAnswer3 = () => {
        setSelectedAnswer(true)
        if (randomNum3 ===1) {
            setCorrectAnswerChosen(true)
        }else if (randomNum3 != 1) {
            setCorrectAnswerChosen(false)
        }
    }
    const checkCorrectAnswer4 = () => {
        setSelectedAnswer(true)
        if (randomNum4 ===1) {
            setCorrectAnswerChosen(true)
        }else if (randomNum4 != 1) {
            setCorrectAnswerChosen(false)
        }
    }


  return (
    <>
    <Navbar />
    <Progress />
    <div className='quiz-full-container'>
    <div className='questions-container'>
        <h1 className='qnumber'>Question {questionNumber}:</h1>
        <h1 className='question'>{currentQuestionQ}</h1>
    </div>
    <div className='answers-container'>
        <button id='ans1' onClick={checkCorrectAnswer1}>{allAnswers[randomNum1]}</button>
        <button id='ans2' onClick={checkCorrectAnswer2}>{allAnswers[randomNum2]}</button>
        <button id='ans3' onClick={checkCorrectAnswer3}>{allAnswers[randomNum3]}</button>
        <button id='ans4' onClick={checkCorrectAnswer4}>{allAnswers[randomNum4]}</button>
    </div>
    <button className='next-button' onClick={nextQuestion}>{buttonContents}</button>
    </div>
    </>
  )
}

export default Questions