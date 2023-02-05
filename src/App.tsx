import React, {useState, useContext} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Login from './Components/Login/Login';
import Questions from './Components/Questions/Questions';
import { QuizContext } from './Helpers/Context';
import QuizStart from './Components/QuizStart/QuizStart';
import Results from './Components/Results/Results';

function App() {
  const [quizState, setQuizState] = useState("login")

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/quiz" element={<QuizStart />}/>
      <Route path="/questions" element={<Questions />}/>
      <Route path="/results" element={<Results />}/>
      {/* <QuizContext.Provider value={{quizState, setQuizState}}>
        {quizState === "login" && <Login /> }
        <Route path="/questions" element={<Questions />}/>
      </QuizContext.Provider>
       */}
    </Routes>
  );
}

export default App;
