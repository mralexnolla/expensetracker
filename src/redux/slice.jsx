import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: 0,
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    increment: (state) => {
      state.expenses += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = expenseSlice.actions;

export default expenseSlice.reducer;
