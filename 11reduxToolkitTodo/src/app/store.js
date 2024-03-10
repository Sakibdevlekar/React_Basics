import {configureStore} from "@reduxjs/toolkit";
import todoReducer  from "../fetures/todo/todoSlice";

export const store =  configureStore({
    reducer:todoReducer
});