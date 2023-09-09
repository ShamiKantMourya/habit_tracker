import React from "react";
import { useSelector,useDispatch } from "react-redux";

import AddHabitModel from "../Components/AddHabitModel";
import "../SCSS/Homepage.scss";
import Header from "../Components/Header";
import Habit from "../Components/Habit";
import ArchivePage from "../Components/ArchivePage";

const Homepage = () => {
  const { habitModel, Habits } = useSelector((state) => state.habits);
  const dispatch = useDispatch();
  return (
    <div className="homepage">
      <div className="homepage-content">
        <Header />
        <ArchivePage />
        {habitModel ? (
          <AddHabitModel />
        ) : (
          <div className="habit-data">
            <div className="habit-box" onClick={()=> dispatch({
              type: "SET_HABITS",
              payload: true
            })}>
              <div className="img-box">
                <img
                  src="https://img.freepik.com/free-vector/boost-your-immune-system-concept-illustration_114360-2833.jpg?w=740&t=st=1693396863~exp=1693397463~hmac=cdbce8e63d0ec3a98940fc23deab2c28fbd0528725c48c34f5ea0815999aa4ee"
                  alt="Add Habit"
                />
              </div>
              <h3 className="habit-txt">Create Habit</h3>
           
            </div>
            <div className="habit-data-box">
              {Habits?.map((habit) => (
                <Habit key={habit.id} habit={habit} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
