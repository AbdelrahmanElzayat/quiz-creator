import React from "react";
import QuizList from "../../components/HomeComponents/quizList/QuizList";
import './Home.css'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="addQuiz">
        <Link to="/">Add New Quiz</Link>
      </div>
      <QuizList />
    </div>
  );
};

export default Home;
