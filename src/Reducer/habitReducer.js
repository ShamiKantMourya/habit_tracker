import { createReducer } from "@reduxjs/toolkit";

const getDataFromLocalStorage = (key) => {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const habit = getDataFromLocalStorage("HabitData");
console.log(habit, "habit");

export const initialState = {
  habitModel: false,
  habitId: null,
  Habits: [
    {
      id: "1",
      imageUrl:
        "https://img.freepik.com/free-photo/man-meditating-front-mountain-landscape_1340-32200.jpg?t=st=1693397076~exp=1693400676~hmac=99f0cccedef41a8bc00423eb173d1bd88f69e9606da28f0e57494fb6b6d77962&w=740",
      name: "Meditate",
      repeat: "Daily",
      goal: "One time a day",
      timeOfDay: "Morning",
      startDate: "2023-06-10",
    },
    {
      id: "2",
      imageUrl:
        "https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=740&t=st=1693396983~exp=1693397583~hmac=68d5ac5a628993014cf14ecd278cf56aa5a488629fa6a5776b800a0de9f6f807",
      name: "Reading",
      repeat: "Weekly",
      goal: "One time a day",
      timeOfDay: "Night",
      startDate: "2023-06-09",
    },
    {
      id: "3",
      imageUrl:
        "https://img.freepik.com/free-vector/city-runner-cartoon-concept-with-young-couple-running-park-vector-illustration_1284-81130.jpg?w=740&t=st=1693407775~exp=1693408375~hmac=22659aea353d3bb00d40e3a7638f5b90e7b7ce5236a37397b75b996b7ba3e3ff",
      name: "Running",
      repeat: "Daily",
      goal: "One time a day",
      timeOfDay: "Evening",
      startDate: "2023-06-19",
    },
  ],
  Archive: [],
};

export const Reducer = createReducer(initialState, {
  ADD_HABITS: (state, action) => {
    state.Habits = [...state.Habits, action.payload];
  },
  ADD_ARCHIVE: (state, action) => {
    state.Archive = [...state.Archive, action.payload];
  },
  EDIT_HABIT: (state, action) => {
    state.Habits = [];
  },
  DELETE_HABITS: (state, action) => {
    state.Habits = [...state.Habits].filter(
      (habit) => habit.id !== action.payload
    );
  },
  REMOVE_ARCHIVE: (state, action) => {
    state.Archive = [...state.Archive].filter(
      (habit) => habit.id !== action.payload
    );
  },
  SET_HABITS: (state, action) => {
    state.habitModel = action.payload;
  },
  SET_HABIT_ID: (state, action) => {
    state.habitId = action.payload;
  },
});
