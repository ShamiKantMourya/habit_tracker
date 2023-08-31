import React from "react";
import { useSelector } from "react-redux";

import AddHabitModel from "../Components/AddHabitModel";
import "../SCSS/Homepage.scss";
import Header from "../Components/Header";
import Habit from "../Components/Habit";

const Homepage = () => {
  const { habitModel, Habits } = useSelector((state) => state.habits);
  return (
    <div className="homepage">
      <div className="homepage-content">
        <Header />
        {habitModel ? (
          <AddHabitModel />
        ) : (
          <div className="habit-data">
            <div className="habit-box">
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
