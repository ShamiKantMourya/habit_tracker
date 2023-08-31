import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import "../SCSS/AddHabitModel.scss";

const AddHabitModel = () => {
  const { Habits } = useSelector((state) => state.habits);
  const [habit, setHabit] = useState({
    name: "",
    imageUrl: "",
    repeat: "",
    goal: "",
    timeOfDay: "",
    startDate: "",
  });
  const dispatch = useDispatch();

  const addHabitHandler = () => {
    dispatch({
      type: "ADD_HABITS",
      payload: { ...habit, id: uuid() },
    });
  };
  const clearHabitHandler = () => {
    dispatch({
      type: "SET_HABITS",
      payload: false,
    });
  };
  useEffect(() => {
    localStorage.setItem("HabitData", JSON.stringify(Habits));
  }, [Habits]);
  return (
    <div className="habit-model">
      <div
        className="bg-model"
        onClick={() =>
          dispatch({
            type: "SET_HABITS",
            payload: false,
          })
        }
      ></div>
      <div className="habit-model-box">
        <h3 className="add-habit-text">Add Habit</h3>
        <div className="enter-habit">
          <label>Enter Your Habit</label>
          <input
            type="text"
            placeholder="Enter habit"
            value={habit.name}
            required
            onChange={(event) =>
              setHabit({
                ...habit,
                name: event.target.value,
              })
            }
          />
        </div>
        <div className="habit-image-url">
          <label>Add Image Url</label>
          <input
            type="text"
            placeholder="Add habit image url"
            value={habit.imageUrl}
            onChange={(event) =>
              setHabit({
                ...habit,
                imageUrl: event.target.value,
              })
            }
          />
        </div>
        <div className="repeat-goal">
          <div className="repeat">
            <label>Repeat</label>
            <select
              defaultValue={"Select Repeat"}
              required
              onChange={(event) =>
                setHabit({
                  ...habit,
                  repeat: event.target.value,
                })
              }
            >
              <option value={"select Repeat"} disabled>
                Select repeat
              </option>
              <option value={"daily"}>Daily</option>
              <option value={"weekly"}>Weekly</option>
              <option value={"monthly"}>Monthly</option>
            </select>
          </div>
          <div className="goal">
            <label>Goal</label>
            <select
              defaultValue={"Select goal"}
              required
              onChange={(event) =>
                setHabit({
                  ...habit,
                  goal: event.target.value,
                })
              }
            >
              <option value={"Select goal"} disabled>
                Select goal
              </option>
              <option value={"one time a day"}>One time a day</option>
              <option value={"two times a day"}>Two times a day</option>
              <option value={"three times a day"}>Three times a day</option>
            </select>
          </div>
        </div>
        <div className="timeOfDay-startDate">
          <div className="timeOfDay">
            <label>Time Of Day</label>
            <select
              defaultValue={"set time of day"}
              required
              onChange={(event) =>
                setHabit({ ...habit, timeOfDay: event.target.value })
              }
            >
              <option value={"set time of day"} disabled>
                Select time
              </option>
              <option value={"morning"}>Morning</option>
              <option value={"afternoon"}>Afternoon</option>
              <option value={"evening"}>Evening</option>
              <option value={"night"}>Night</option>
            </select>
          </div>
          <div className="startDate">
            <label>Select Date</label>
            <input
              type="date"
              name="date"
              placeholder="DD/MM/YYYY"
              required
              onChange={(event) =>
                setHabit({ ...habit, startDate: event.target.value })
              }
            />
          </div>
        </div>
        <div className="add-habit-btn">
          <button onClick={clearHabitHandler}>Discard</button>
          <button onClick={addHabitHandler}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddHabitModel;
