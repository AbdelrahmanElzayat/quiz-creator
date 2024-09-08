import { configureStore } from "@reduxjs/toolkit";
import quizzesSlice from "./QuizesReducer/quizzesSlice";

const store = configureStore({
  reducer: {
    quizzes: quizzesSlice,
  },
});

export default store;
