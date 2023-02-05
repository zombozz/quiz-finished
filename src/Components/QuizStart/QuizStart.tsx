import React from 'react'
import {Link} from "react-router-dom"
import './QuizStart.css'
import Navbar from '../Nav/Navbar';

const QuizStart = () => {

  return (
    <>
    <Navbar />
    <div className='quiz-start-container'>
        <h3>Welcome, {localStorage.getItem("name")}</h3>
        <p className='description'>This is a quiz with 10 questions about a random topic. The answers are multiple choice,
           and only 1 out of the 4 options presented is correct. You are allowed to go back and change your answers if needed. Good luck!</p>
        <p className='note'> *note: you can only access questions you have already answered.</p>
        <h1>Are you ready to start the quiz?</h1>
        <Link to="/questions"><button className='login-as-guest-btn'> Begin</button></Link>
    </div>
    </>
  )
}

export default QuizStart