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
                  src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148549798.jpg?w=740&t=st=1694252222~exp=1694252822~hmac=8351ae19282aae437243af3e7fbec25f87fd06500e9e721d7613eb358ba0949c"
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
