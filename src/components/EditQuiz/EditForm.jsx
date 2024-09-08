import React from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { updateQuiz } from "../../redux/QuizesReducer/quizzesSlice";

import "./EditForm.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// Validation schema using Yup
const QuizSchema = Yup.object().shape({
  quizTitle: Yup.string().required("Quiz title is required"),
  description: Yup.string().required("Description is required"),
  score: Yup.number().required("Score is required"),
  url: Yup.string().required("url is required"),
  questions: Yup.array()
    .of(
      Yup.object().shape({
        feedback_true: Yup.string().required("feedback_true is required"),
        feedback_false: Yup.string().required("feedback_false is required"),
        question: Yup.string().required("Question is required"),
        answers: Yup.array()
          .of(
            Yup.object().shape({
              answerText: Yup.string().required("Answer text is required"),
            })
          )
          .min(2, "At least 2 answers are required")
          .required("Answers are required"),
      })
    )
    .min(1, "At least one question is required"),
});
const EditForm = ({ quizValues }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={quizValues}
      validationSchema={QuizSchema}
      onSubmit={(values) => {
        dispatch(updateQuiz({ id: values.id, updatedQuiz: values }));
        toast.success("Quiz Updated Successfully");
        navigate(-1)
      }}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <Form className="addForm">
          <div className="formGroup">
            <label htmlFor="quizTitle">Quiz Title</label>
            <Field name="quizTitle" type="text" />
            {errors.quizTitle && touched.quizTitle ? (
              <div className="error">{errors.quizTitle}</div>
            ) : null}
          </div>

          <div className="formGroup">
            <label htmlFor="description">Description</label>
            <Field name="description" as="textarea" />
            {errors.description && touched.description ? (
              <div className="error">{errors.description}</div>
            ) : null}
          </div>
          <div className="formGroup">
            <label htmlFor="score">Score</label>
            <Field name="score" type="text" />
            {errors.score && touched.score ? (
              <div className="error">{errors.score}</div>
            ) : null}
          </div>
          <div className="formGroup">
            <label htmlFor="url">url</label>
            <Field name="url" type="url" />
            {errors.url && touched.url ? (
              <div className="error">{errors.url}</div>
            ) : null}
          </div>

          <FieldArray name="questions">
            {({ push, remove }) => (
              <>
                {values?.questions?.map((question, qIndex) => (
                  <div key={qIndex} className="questionGroup">
                    <div className="formGroup">
                      <label htmlFor={`questions.${qIndex}.question`}>
                        Question {qIndex + 1}
                      </label>
                      <div className="questionWrapper">
                        <Field
                          name={`questions.${qIndex}.question`}
                          type="text"
                        />
                        <button
                          type="button"
                          className="iconButton"
                          onClick={() => remove(qIndex)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            // fill=""
                          >
                            <path
                              fill="#ee232f"
                              d="M9 3v1H4v2h16V4h-5V3H9zm-1 5v11h2V8H8zm4 0v11h2V8h-2zm4 0v11h2V8h-2zM6 8v11h2V8H6z"
                            />
                          </svg>
                        </button>
                      </div>
                      {errors.questions?.[qIndex]?.question &&
                      touched.questions?.[qIndex]?.question ? (
                        <div className="error">
                          {errors.questions[qIndex]?.question}
                        </div>
                      ) : null}
                    </div>

                    <FieldArray name={`questions.${qIndex}.answers`}>
                      {({ push: pushAnswer, remove: removeAnswer }) => (
                        <>
                          {question.answers.map((answer, aIndex) => (
                            <div key={aIndex} className="formGroup">
                              <label
                                htmlFor={`questions.${qIndex}.answers.${aIndex}.answerText`}
                                style={{ fontSize: "14px" }}
                              >
                                Answer {aIndex + 1}
                              </label>
                              <Field
                                name={`questions.${qIndex}.answers.${aIndex}.answerText`}
                                type="text"
                              />

                              <label
                                className="correctAnswer"
                                style={{ fontSize: "14px" }}
                              >
                                <Field
                                  type="radio"
                                  name={`questions.${qIndex}.correctAnswer`}
                                  value={aIndex.toString()}
                                />
                                Correct Answer
                              </label>
                              {errors.questions?.[qIndex]?.answers?.[aIndex]
                                ?.answerText &&
                              touched.questions?.[qIndex]?.answers?.[aIndex]
                                ?.answerText ? (
                                <div className="error">
                                  {
                                    errors.questions[qIndex].answers[aIndex]
                                      .answerText
                                  }
                                </div>
                              ) : null}
                            </div>
                          ))}

                          <button
                            type="button"
                            className="iconButton"
                            onClick={() =>
                              pushAnswer({ answerText: "", isCorrect: false })
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path
                                fill="#28a745"
                                d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                              />
                            </svg>
                          </button>
                        </>
                      )}
                    </FieldArray>

                    <div className="formGroup" style={{ marginTop: "20px" }}>
                      <label htmlFor={`questions.${qIndex}.feedback_true`}>
                        feedback true
                      </label>
                      <div className="questionWrapper">
                        <Field
                          name={`questions.${qIndex}.feedback_true`}
                          type="text"
                        />
                      </div>
                      {errors.questions?.[qIndex]?.feedback_true &&
                      touched.questions?.[qIndex]?.feedback_true ? (
                        <div className="error">
                          {errors.questions[qIndex].feedback_true}
                        </div>
                      ) : null}
                    </div>
                    <div className="formGroup">
                      <label htmlFor={`questions.${qIndex}.feedback_false`}>
                        feedback false
                      </label>
                      <div className="questionWrapper">
                        <Field
                          name={`questions.${qIndex}.feedback_false`}
                          type="text"
                        />
                      </div>
                      {errors.questions?.[qIndex]?.feedback_false &&
                      touched.questions?.[qIndex]?.feedback_false ? (
                        <div className="error">
                          {errors.questions[qIndex].feedback_false}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}

                <button
                  className="submitButton AddQuistion"
                  type="button"
                  onClick={() =>
                    push({
                      question: "",
                      answers: [
                        { answerText: "", isCorrect: false },
                        { answerText: "", isCorrect: false },
                      ],
                    })
                  }
                >
                  Add Quistion
                </button>
              </>
            )}
          </FieldArray>

          <button className="submitButton" type="submit">
            Save Changes
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;
