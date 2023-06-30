import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
  {id: 1, text: "Salary", amount: 10000},
  {id: 2, text: "Rent", amount: -1000},
],
   
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {

    deletetrans:(state, {payload}) =>{
      state.transactions = state.transactions.filter((transaction) => transaction.id !== payload);
    },

    addtransactions:(state, {payload}) =>{
      state.transactions.push(payload);
    }
    
  },
});

// Action creators are generated for each case reducer function
export const { addtransactions , deletetrans} = expenseSlice.actions;

export default expenseSlice.reducer;
