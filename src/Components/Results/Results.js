import React, {useState, useEffect} from 'react'
import res from '../Questions/Questions'
import Navbar from '../Nav/Navbar';
import {Link} from "react-router-dom"
import { correctAnswersSlice, makeCorrect, makeIncorrect } from '../../redux/correctAnswers'
import { useDispatch, useSelector } from "react-redux"
import './Results.css'



const Results = () => {

  const  {correctAnswerNum} = useSelector((state) => state.correctAnswers)
  const results = localStorage.getItem('results')
  const resultsArray = results.split(/\s*,\s*/)
  console.log(resultsArray)
  let correctAnswerNumber = 0;
  const [resultsMessage, setResultsMessage] = useState("")
  const [scoreNumber, setScoreNumber] = useState(0)


  const checkOccurrence = () => {
    for (let i=0; i<11;i++) {
      if (resultsArray[i] == "Correct") {
            correctAnswerNumber = correctAnswerNumber + 1;
            setScoreNumber(correctAnswerNumber)
            if (correctAnswerNumber >= 0){setResultsMessage('You can do better! Try again')}
            if (correctAnswerNumber > 4){setResultsMessage('Great try!')}
            if (correctAnswerNumber > 7){setResultsMessage('Amazing Effort!')}
            if (correctAnswerNumber === 10){setResultsMessage('Excellent! Congrationalutions (i spelt it wrong by accident and it was too funny to change), you scored 100%!')}
        }
    };
};

  useEffect(()=> {
    checkOccurrence()
  }, [])

  return (

    <>
    <Navbar />
    <div className='results-container'>
        <div className='title'>
        <h1>Results:</h1>
        <h2>You scored {scoreNumber}/10</h2>
        <h3>{resultsMessage}</h3>
        </div>
      <div className='results'>
        <p>Question 1: {resultsArray[0]}</p>
        <p>Question 2: {resultsArray[1]}</p>
        <p>Question 3: {resultsArray[2]}</p>
        <p>Question 4: {resultsArray[3]}</p>
        <p>Question 5: {resultsArray[4]}</p>
        <p>Question 6: {resultsArray[5]}</p>
        <p>Question 7: {resultsArray[6]}</p>
        <p>Question 8: {resultsArray[7]}</p>
        <p>Question 9: {resultsArray[8]}</p>
        <p>Question 10: {resultsArray[9]}</p>
      </div>
      <Link to="/questions"><button className='retry-button'>Retry Test</button></Link>
    </div>
    </>
  )
}

export default Results