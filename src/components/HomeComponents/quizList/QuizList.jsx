import React from "react";
import QuizCard from "../quizCard/QuizCard";
import "./QuizList.css";
const QuizList = ({data}) => {
  return (
    <div className="quizList">
      {data?.map((item) => (
        <QuizCard data={item} class={"mainCard"} />
      ))}
    </div>
  );
};

export default QuizList;
