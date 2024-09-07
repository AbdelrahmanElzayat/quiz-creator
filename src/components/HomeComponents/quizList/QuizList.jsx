import React from 'react'
import QuizCard from '../quizCard/QuizCard'
import './QuizList.css'
const QuizList = () => {
  return (
    <div className="quizList">
      <QuizCard class={"mainCard"} />
      <QuizCard class={"mainCard"} />
      <QuizCard class={"mainCard"} />
    </div>
  );
}

export default QuizList