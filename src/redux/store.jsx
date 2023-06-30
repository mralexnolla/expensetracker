import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import expenseSlice  from "./slice";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from 'redux-thunk'

const persistConfig = {
    key: "expenseTracker",
    storage
}

const expenseReducer = combineReducers({ transactions: expenseSlice });

const persistedReducer = persistReducer(persistConfig, expenseReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store)
