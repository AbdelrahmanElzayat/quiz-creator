import React from "react";
import QuizCard from "../../components/HomeComponents/quizCard/QuizCard";
import './ViewQuiz.css'
import QuistionAnswer from "../../components/QuizDetails/QuistionAnswer";
const ViewQuiz = () => {
  return (
    <div className="ViewQuiz">
      <QuizCard class={"view_card"}/>
      <QuistionAnswer/>
    </div>
  );
};

export default ViewQuiz;
