import React from "react";
import QuizCard from "../../components/HomeComponents/quizCard/QuizCard";
import "./ViewQuiz.css";
import QuistionAnswer from "../../components/QuizDetails/QuistionAnswer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NotFound from '../not-found/NotFound'
const ViewQuiz = () => {
  const { id } = useParams();
  const quizzes = useSelector((state) => state.quizzes);

  const quiz = quizzes?.find((item) => item?.id === id);

  return (
      quiz ?
      <>
      <QuizCard data={quiz} class={"view_card"} />
      <div className="ViewQuiz">
        <QuistionAnswer data={quiz}/>
      </div>
    </>
    :
    <NotFound/>
  );
};

export default ViewQuiz;
