import React, { useState } from 'react'
import './Progress.css'
import { useDispatch, useSelector } from "react-redux"
import { setGoToQ } from '../../redux/goToQuestion'
import { clickedTrue } from '../../redux/isClicked'

const Progress = () => {

  const {goToQNum} = useSelector((state: any) => state.goToQuestion)
  const {clicked} = useSelector((state: any) => state.isClicked)
  const dispatch = useDispatch<any>()


  const clickedQ1 = () => {dispatch(setGoToQ(1)); dispatch(clickedTrue(true))}
  const clickedQ2 = () => {dispatch(setGoToQ(2)); dispatch(clickedTrue(true))}
  const clickedQ3 = () => {dispatch(setGoToQ(3)); dispatch(clickedTrue(true))}
  const clickedQ4 = () => {dispatch(setGoToQ(4)); dispatch(clickedTrue(true))}
  const clickedQ5 = () => {dispatch(setGoToQ(5)); dispatch(clickedTrue(true))}
  const clickedQ6 = () => {dispatch(setGoToQ(6)); dispatch(clickedTrue(true))}
  const clickedQ7 = () => {dispatch(setGoToQ(7)); dispatch(clickedTrue(true))}
  const clickedQ8 = () => {dispatch(setGoToQ(8)); dispatch(clickedTrue(true))}
  const clickedQ9 = () => {dispatch(setGoToQ(9)); dispatch(clickedTrue(true))}
  const clickedQ10 = () => {dispatch(setGoToQ(10)); dispatch(clickedTrue(true))}
  return (
    <div className='progress-bar'>
        <div className='progress-buttons'>
          {/* <button>Question 1</button>
          <button>Question 2</button>
          <button>Question 3</button>
          <button>Question 4</button>
          <button>Question 5</button>
          <button>Question 6</button>
          <button>Question 7</button>
          <button>Question 8</button>
          <button>Question 9</button>
          <button>Question 10</button> */}
          <button onClick={clickedQ1}>Q 1</button>
          <button onClick={clickedQ2}>Q 2</button>
          <button onClick={clickedQ3}>Q 3</button>
          <button onClick={clickedQ4}>Q 4</button>
          <button onClick={clickedQ5}>Q 5</button>
          <button onClick={clickedQ6}>Q 6</button>
          <button onClick={clickedQ7}>Q 7</button>
          <button onClick={clickedQ8}>Q 8</button>
          <button onClick={clickedQ9}>Q 9</button>
          <button onClick={clickedQ10}>Q 10</button>
        </div>
    </div>
  )
}

export default Progress