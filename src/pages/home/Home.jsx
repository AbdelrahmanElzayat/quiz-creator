import React from "react";
import QuizList from "../../components/HomeComponents/quizList/QuizList";
import './Home.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
    const quizzes = useSelector((state) => state.quizzes);

  return (
    <div className="home">
      <div className="addQuiz">
        <Link to="/add-quiz">Add New Quiz</Link>
      </div>
      <QuizList data={quizzes}/>
    </div>
  );
};

export default Home;
