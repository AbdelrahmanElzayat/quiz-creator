import React from 'react'
import './EditQuiz.css'
import EditForm from '../../components/EditQuiz/EditForm';
import NotFound from "../not-found/NotFound";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const EditQuiz = () => {
      const { id } = useParams();
      const quizzes = useSelector((state) => state.quizzes);

      const quiz = quizzes?.find((item) => item?.id === id);
  return (
      quiz ? 
    <div className="EditQuiz">
      <h2>Edit quiz</h2>
      <EditForm quizValues={quiz} />
    </div>
    :
      <NotFound/>
  );
}

export default EditQuiz