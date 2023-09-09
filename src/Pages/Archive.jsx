import React from "react";
import { useSelector } from "react-redux";
import Habit from "../Components/Habit";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

import "../SCSS/Archive.scss";

const Archive = () => {
  const { Archive } = useSelector((state) => state.habits);
  // console.log(Archive, "Archive");
  const navigate = useNavigate();
  return (
    <div className="archive">
      <div className="archive-content">
        <Header />
        <div className="navigate-btn">
          <button className="back-btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
        <div className="habit-data">
          {Archive?.map((habit) => (
            <Habit key={habit.id} habit={habit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;
