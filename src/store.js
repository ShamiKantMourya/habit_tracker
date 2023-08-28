import {configureStore} from "@reduxjs/toolkit";
import { Reducer } from "./Reducer/habitReducer";


const store = configureStore({
    reducer: {
        habits: Reducer,
    }
});

export default store;