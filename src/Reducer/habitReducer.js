import {createReducer} from "@reduxjs/toolkit";

export const initialState = {
  Habits: [],
  Archive: [],
};

export const Reducer = createReducer(initialState,{
  ADD_HABITS: (state, action) => {
    state.Habits = [...state.Habits, action.payload]
  },
  ADD_ARCHIVE: (state, action) => {
    state.Archive = [...state.Archive, action.payload]
  },
  EDIT_HABIT: (state, action) => {
    state.Habits = []
  },
  DELETE_HABITS: (state, action) => {
    state.Habits = [...state.Habits].filter((habit) => habit.id !== action.payload.id)
  },
  REMOVE_ARCHIVE: (state, action) =>  {
    state.Archive = [...state.Archive].filter((habit) => habit.id !== action.payload.id)
  }

});