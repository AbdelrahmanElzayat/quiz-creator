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
      {quizzes && quizzes.length > 0 ? (
        <QuizList data={quizzes} />
      ) : (
        <h2 style={{ textAlign: "center" }}>No quizzes added</h2>
      )}
    </div>
  );
};

export default Home;
