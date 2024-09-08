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
    
  },
});

export const { addNewQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
