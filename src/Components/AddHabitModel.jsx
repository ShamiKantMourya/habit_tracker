import React from "react";
import { useState, useContext } from "react";
import { v4 as uuid } from "uuid";

import { HabitContext } from "../Context/HabitContext";

const AddHabitModel = () => {
  const [habit, setHabit] = useState({
    name: "",
    repeat: "",
    goal: "",
    timeOfDay: "",
    startDate: "",
  });

  const { habitDispatch } = useContext(HabitContext);

  const addHabitHandler = () => {
    habitDispatch({
      type: "ADD_HABITS",
      payload: { ...habit, id: uuid() },
    });
  };
  const clearHabitHandler = () => {
    setHabit({
      name: "",
      repeat: "",
      goal: "",
      timeOfDay: "",
      startDate: "",
    });
    console.log("clicked discard");
  };

  return (
    <div className="habit-model">
      <div className="habit-model-box">
        <input
          type="text"
          placeholder="Enter habit"
          value={habit.name}
          onChange={(event) =>
            setHabit({
              ...habit,
              name: event.target.value,
            })
          }
        />
        <div className="repeat-goal">
          <div className="repeat">
            <select
              defaultValue={"Select Repeat"}
              onChange={(event) =>
                setHabit({
                  ...habit,
                  repeat: event.target.value,
                })
              }
            >
              <option value={"Select Repeat"}>Select repeat</option>
              <option value={"daily"}>Daily</option>
              <option value={"weekly"}>Weekly</option>
              <option value={"monthly"}>Monthly</option>
            </select>
          </div>
          <div className="goal">
            <select
              defaultValue={"Select goal"}
              onChange={(event) =>
                setHabit({
                  ...habit,
                  goal: event.target.value,
                })
              }
            >
              <option value={"Select goal"}>Select goal</option>
              <option value={"one time a day"}>One time a day</option>
              <option value={"two times a day"}>Two times a day</option>
              <option value={"three times a day"}>Three times a day</option>
            </select>
          </div>
        </div>
        <div className="timeOfDay-startDate">
          <div className="timeOfDay">
            <select
              defaultValue={"set time of day"}
              onChange={(event) =>
                setHabit({ ...habit, timeOfDay: event.target.value })
              }
            >
              <option value={"set time of day"}>Select time</option>
              <option value={"morning"}>Morning</option>
              <option value={"afternoon"}>Afternoon</option>
              <option value={"evening"}>Evening</option>
              <option value={"night"}>Night</option>
            </select>
          </div>
          <div className="startDate">
            <input
              type="date"
              name="date"
              placeholder="DD/MM/YYYY"
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
