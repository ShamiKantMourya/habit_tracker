import {createReducer} from "@reduxjs/toolkit";

const getDataFromLocalStorage = (key) => {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const habit = getDataFromLocalStorage("HabitData");
console.log(habit, "habit");

export const initialState = {
  habitModel: false,
  Habits: [
    {
      id: "1",
      imageUrl: "https://img.freepik.com/free-photo/man-meditating-front-mountain-landscape_1340-32200.jpg?t=st=1693397076~exp=1693400676~hmac=99f0cccedef41a8bc00423eb173d1bd88f69e9606da28f0e57494fb6b6d77962&w=740",
      name: "Meditate",
      repeat: "Daily",
      goal: "1 time daily",
      timeOfDay: "In Morning",
      startDate: "15/06/2023",
    },
    {
      id: "2",
      imageUrl: "https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=740&t=st=1693396983~exp=1693397583~hmac=68d5ac5a628993014cf14ecd278cf56aa5a488629fa6a5776b800a0de9f6f807",
      name: "Reading",
      repeat: "Daily",
      goal: "1 time daily",
      timeOfDay: "At Night",
      startDate: "17/07/2023",
    },
    {
      id: "3",
      imageUrl: "https://www.freepik.com/free-vector/city-runner-cartoon-concept-with-young-couple-running-park-vector-illustration_39094727.htm#query=jogging&position=18&from_view=search&track=sph",
      name: "Running",
      repeat: "Daily",
      goal: "1 time daily",
      timeOfDay: "In Morning",
      startDate: "07/05/2023",
    }
  ],
  Archive: [],
};

export const Reducer = createReducer(initialState,{
  ADD_HABITS: (state, action) => {
    state.Habits = [...state.Habits, action.payload];
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
  },
  SET_HABITS: (state, action) => {
    state.habitModel = action.payload
  }

});