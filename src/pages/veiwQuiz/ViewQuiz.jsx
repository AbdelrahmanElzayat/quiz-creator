import React from "react";
import QuizCard from "../../components/HomeComponents/quizCard/QuizCard";
import './ViewQuiz.css'
import QuistionAnswer from "../../components/QuizDetails/QuistionAnswer";
const ViewQuiz = () => {
  return (
    <>
      <QuizCard class={"view_card"}/>
    <div className="ViewQuiz">
      <QuistionAnswer/>
    </div>
    </>
  );
};

export default ViewQuiz;
