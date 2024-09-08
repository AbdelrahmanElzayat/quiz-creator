import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("quizzesData")) || [];

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addNewQuiz: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("quizzesData", JSON.stringify(state));
    },
    updateQuiz: (state, action) => {
      const { id, updatedQuiz } = action.payload;
      const index = state.findIndex((quiz) => quiz.id === id);
      if (index !== -1) {
        state[index] = updatedQuiz;
        localStorage.setItem("quizzesData", JSON.stringify(state));
      }
    },
  },
});

export const { addNewQuiz, updateQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
