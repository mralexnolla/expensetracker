import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
    {id: 1, text:"dfadfa", amount:1000},
    {id: 2, text:"asdva", amount:20},
    {id: 3, text:"magna", amount:100},
    {id: 4, text:"savis", amount:80},
  ]
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    createTransaction: (state, {payload}) => {
        state.transactions.push(payload);
    },
    deleteTransaction: (state, {payload}) => {
        state.transactions = state.transactions.filter(transaction => transaction.id !== payload)
    },
    
   
  },
});

// Action creators are generated for each case reducer function
export const { createTransaction, deleteTransaction } = expenseSlice.actions;

export default expenseSlice.reducer;
